"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assembler_1 = require("./Assembler");
describe('Assembler', () => {
    let assembler;
    beforeAll(() => {
        assembler = new Assembler_1.Assembler();
    });
    it('Test code', () => {
        const result = assembler.assemble([
            ['DUP1'],
            ['ADD'],
            ['STOP']
        ]);
        expect(result).toEqual('800100');
    });
    it('Test with push', () => {
        const result = assembler.assemble([
            ['PUSH1', '69'],
            ['SUB'],
            ['INVALID']
        ]);
        expect(result).toEqual('606903fe');
    });
    it('Test with push4', () => {
        const result = assembler.assemble([
            ['PUSH4', '69'],
            ['SUB'],
            ['INVALID']
        ]);
        expect(result).toEqual('630000006903fe');
    });
});
//# sourceMappingURL=Assembler.test.js.map