import { Assembler } from "./Assembler";

const assemble = (opcodes: string[][]) => {
    const assembler = new Assembler();
    return assembler.assemble(opcodes);
}

export {assemble}
