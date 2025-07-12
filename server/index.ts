import { spawn } from 'child_process';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Start Vite development server
console.log('Starting Vite development server...');
const viteProcess = spawn('vite', ['--host', '0.0.0.0', '--port', '5173'], {
  cwd: rootDir,
  stdio: 'pipe'
});

// Create a simple HTTP server on port 5000 that redirects to Vite
const redirectServer = createServer((req, res) => {
  const viteUrl = `http://localhost:5173${req.url}`;
  res.writeHead(302, { Location: viteUrl });
  res.end();
});

redirectServer.listen(5000, '0.0.0.0', () => {
  console.log('Redirect server listening on port 5000');
  console.log('Vite server running on port 5173');
});

viteProcess.stdout?.on('data', (data) => {
  console.log(data.toString());
});

viteProcess.stderr?.on('data', (data) => {
  console.error(data.toString());
});

viteProcess.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
  redirectServer.close();
  process.exit(code);
});

viteProcess.on('error', (error) => {
  console.error('Failed to start Vite:', error);
  redirectServer.close();
  process.exit(1);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nShutting down...');
  viteProcess.kill('SIGINT');
  redirectServer.close();
});

process.on('SIGTERM', () => {
  console.log('\nShutting down...');
  viteProcess.kill('SIGTERM');
  redirectServer.close();
});