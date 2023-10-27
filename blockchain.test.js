const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain' , () => {
  const blockchain = new Blockchain();

  it('Contain a `chain` Array instance', () => {
    expect(blockchain.chain instanceof Array).toBe(true);
  });
  
  it('Start with a genesis block', () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it('Adds a new block to the chain' , () => {
    const newData = 'foo-bar';
    blockchain.addBlock({ data: newData });

    expect(blockchain.chain[blockchain.chain.length-1].data).toEqual(newData);
  });
});