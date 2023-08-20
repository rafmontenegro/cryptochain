class Block {
  constructor({ timestamp, lastHash, hash, data }){
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
}

const block1 = new Block ({
  timestamp: '01/10/01',
  lastHash:'block-lastHash',
  hash:'block-hash',
  data:'block-data'
})

console.log('block1', block1)