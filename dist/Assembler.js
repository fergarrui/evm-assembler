"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Opcodes_1 = require("./Opcodes");
class Assembler {
    assemble(opcodes) {
        return opcodes.map(op => {
            const opcode = op[0];
            let bytecode = Opcodes_1.Opcodes.opcodes[opcode];
            if (!bytecode) {
                throw new Error(`Bytecode for ${opcode} not found`);
            }
            if (opcode.startsWith('PUSH')) {
                let argument = op[1];
                if (!argument) {
                    throw new Error('PUSH opcode must have an argument');
                }
                if (argument.startsWith('0x')) {
                    argument = argument.substr(2, argument.length);
                }
                const pushBytes = parseInt(opcode.replace('PUSH', ''));
                const hexBytes = pushBytes * 2;
                bytecode += argument.padStart(hexBytes, '0');
            }
            return bytecode;
        }).reduce((acum, item) => {
            return acum + item;
        }, "");
    }
}
exports.Assembler = Assembler;
//# sourceMappingURL=Assembler.js.map