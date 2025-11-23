import test from 'node:test';
import assert from 'node:assert';
import { suma } from '../src/suma.js';

test('suma 2 + 3 = 5', () => {
  assert.strictEqual(suma(2, 3), 5);
});
