const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain' , () => {
  let blockchain;

  beforeEach(() => {
    blockchain = new Blockchain();
  });

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

  describe('isValidChain()', () => {
    describe('When the chin doesn`t start with a genesis block', () => {
      it('returns false', () => {
        blockchain.chain[0] = { data: 'fake-genesis' };

        expect(blockchain.isValidchain(blockchain.chain)).toEqual(false);
      });
    });
  
    describe('When the chain starts with the genesis block and has multiples blocks', () => {

      beforeEach(() => {
        blockchain.addBlock({ data: 'Flamengo' });
        blockchain.addBlock({ data: 'Furia' });
        blockchain.addBlock({ data: 'Chile' });
      });

      describe('And a lasthash reference has changed', () => {
        it('Returns false', () => {
        
          blockchain.chain[2].lastHash = 'broken-lasthash'

          expect(blockchain.isValidchain(blockchain.chain)).toEqual(false);
        });
      });
      
      describe('And the chain contains a block with valid field', () => {
        it('Return false', () => {
          blockchain.chain[2].data = 'bad-evil-data'

          expect(blockchain.isValidchain(blockchain.chain)).toEqual(false);
        });
      });

      describe('And the chain doesn`t have invalid blocks', () => {
        it('Returns true', () => {
          expect(blockchain.isValidchain(blockchain.chain)).toEqual(true);
        });
      });
    });
  });
});
