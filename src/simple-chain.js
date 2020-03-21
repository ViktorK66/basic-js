const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position!='number' || !Number.isInteger(position) ||  (position < 1) || (position >= this.getLength())) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
    const buildChain = this.chain;
    this.chain = [];
    return buildChain.join('~~');
  }
};

module.exports = chainMaker;