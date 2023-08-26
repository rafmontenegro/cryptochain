const Block = require('./block.js');
const { GENESIS_DATA } = require('./config.js');

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
});

