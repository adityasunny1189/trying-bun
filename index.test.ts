import { describe, expect, test, beforeAll } from 'bun:test';

beforeAll(() => {

});

describe('math', () => {
    test('addition', () => {
        expect(3+2).toBe(5);
    });
});
