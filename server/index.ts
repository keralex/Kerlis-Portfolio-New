import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Start Vite development server directly on port 5000 with allowed hosts
console.log('Starting Vite development server on port 5000...');
const viteProcess = spawn('vite', [
  '--host', '0.0.0.0', 
  '--port', '5000',
  '--config', './vite.dev.config.ts'
], {
  cwd: rootDir,
  stdio: 'inherit'
});

console.log('Portfolio app will be available at http://localhost:5000');

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