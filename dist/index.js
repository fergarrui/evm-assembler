"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assembler_1 = require("./Assembler");
const assemble = (opcodes) => {
    const assembler = new Assembler_1.Assembler();
    return assembler.assemble(opcodes);
};
exports.assemble = assemble;
//# sourceMappingURL=index.js.map