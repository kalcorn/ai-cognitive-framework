import fs from 'fs';
import { initCommand } from './init.js';

describe('init command', () => {
  const testDir = './test-framework-output';

  afterEach(() => {
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true, force: true });
    }
  });

  it('should create the default directory and copy files', () => {
    initCommand.handler({ path: testDir });
    expect(fs.existsSync(testDir)).toBe(true);
    const files = fs.readdirSync(testDir);
    // Assuming there are 11 markdown files in the framework directory
    expect(files.length).toBe(11);
  });

  it('should create a custom directory when --path is provided', () => {
    const customPath = './custom-test-dir';
    initCommand.handler({ path: customPath });
    expect(fs.existsSync(customPath)).toBe(true);
    fs.rmSync(customPath, { recursive: true, force: true });
  });
});
