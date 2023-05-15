import React, { Fragment } from 'react';

function DetailOrder() {
  React.useEffect(() => {
    document.title = 'Detail Product';
  }, []);

  return (
    <Fragment>
      <h1>Detail Produk</h1>
    </Fragment>
  );
}

export default DetailOrder;
