// import React from 'react';

// export default () => (
//   <p style={{ textAlign: 'center' }}>
//     想要添加更多页面？请参考{' '}
//     <a href="https://umijs.org/guide/block.html" target="_blank" rel="noopener noreferrer">
//       umi 区块
//     </a>
//     。
//   </p>
// );
import React, { PureComponent } from 'react';
import style from './entry.less'

class Entry extends PureComponent{
  constructor (props) {
    super(props)
    this.state = {
      name: '1111'
    }
  }

  render () {
    const {name} = this.state;
    return (
      <div className={style.entry_wrapper}>{name}</div>
    )
  }
}
export default Entry