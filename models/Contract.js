const mongoose = require('mongoose');

const ContractSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  contractAddress: [],
  wallet: {
    type: String,
    required: true,
  },
  contentImage: {
    type: String,
  },
  chains: [],
  trusted: [],
  mint: [],
  isPrivate: {
    type: Boolean,
    default: false
  },
  isPrivate: {
    type: Boolean,
    default: false
  },
  isMintable: {
    type: Boolean,
    default: true
  },
  isTradeable: {
    type: Boolean,
    default: true
  },
  isCrossBuyable: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('contract', ContractSchema);
