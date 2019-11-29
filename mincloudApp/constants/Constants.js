/**
  Icons from: https://github.com/cjdowner/cryptocurrency-icons/tree/master/32%402x/icon
*/
export function getCoinIconUri(coinName) {
    switch (coinName) {
      case 'Bitcoin':
        return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/btc@2x.png?raw=true';
  
      case 'Ethereum':
        return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/eth@2x.png?raw=true';
  
      case 'XRP':
        return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/xrp@2x.png?raw=true';
  
      case 'EOS':
          return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/eos@2x.png?raw=true';
  
      case 'Bitcoin Cash':
        return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/bcc@2x.png?raw=true';
  
      case 'Litecoin':
        return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/ltc@2x.png?raw=true';
  
      default:
        return 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
    }
}

export function getCoinYoutubeUrl(coinName) {
  switch (coinName) {
    case 'Bitcoin':
      return 'https://m.youtube.com/watch?v=AUMmQK7Ag1w';

    case 'Ethereum':
      return 'https://m.youtube.com/watch?v=zOUkJQAYdGw';

    case 'XRP':
      return 'https://m.youtube.com/watch?v=R69HOGkYScg';

    case 'EOS':
        return 'https://m.youtube.com/watch?v=KjTDvHuk6wg';

    case 'Bitcoin Cash':
      return 'https://m.youtube.com/watch?v=tbT46uzHtEE&t=189s';

    case 'Litecoin':
      return 'https://m.youtube.com/watch?v=1W44gSm1nsQ';

    default:
      return 'https://m.youtube.com/watch?v=bZ3_617Vyhg';
  }
}