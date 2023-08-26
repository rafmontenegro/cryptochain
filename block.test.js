const Block = require('./block.js');
const { GENESIS_DATA } = require('./config.js');
const cryptoHash = require('./crypto-hash');

describe('Block', () => {
  const timestamp = 'a-date';
  const lastHash = 'foo-hash';
  const hash = 'bar-hash';
  const data = ['Blockchain' , 'data'];
  const block = new Block ({ timestamp, lastHash, hash, data, });

  it('Has a timestamp, lastHash, hash and data property', () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  describe('genesis()', () => {
    const genesisBlock = Block.genesis();

    it('Returns a block instance', () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });
    it('Returns the genesis data', () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });

  describe('mineBlock()', () => {
    const lastBlock = Block.genesis;
    const data = 'Mined block';
    const minedBlock = Block.mineBlock({ lastBlock, data });

    it('Return a block instance', () => {
      expect(minedBlock instanceof Block).toBe(true);    
    });
    it('Set `lastHash` to be the `hash` of the lastBlock', () => {
      expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });
    it('Set the `data`', () => {
      expect(minedBlock.data).toEqual(data);
    });
    it('Set the `timestamp`', () => {
      expect(minedBlock.timestamp).not.toEqual(undefined);
    });
    it('Creates a SHA-256 `hash` based on the proper inputs', () => {
      expect(minedBlock.hash)
        .toEqual(cryptoHash(minedBlock.timestamp, lastBlock.hash, data))
    });
  });
});

