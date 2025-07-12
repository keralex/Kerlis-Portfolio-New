import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('Starting React portfolio app...');
const viteProcess = spawn('vite', [
  '--host', '0.0.0.0', 
  '--port', '5000',
  '--config', './vite.dev.config.ts'
], {
  cwd: rootDir,
  stdio: 'inherit'
});

viteProcess.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
  process.exit(code);
});

viteProcess.on('error', (error) => {
  console.error('Failed to start Vite:', error);
  process.exit(1);
});

process.on('SIGINT', () => {
  console.log('\nShutting down...');
  viteProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\nShutting down...');
  viteProcess.kill('SIGTERM');
});