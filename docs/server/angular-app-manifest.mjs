
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/inicio",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/inicio"
  },
  {
    "renderMode": 2,
    "route": "/acercade"
  },
  {
    "renderMode": 2,
    "route": "/pipe"
  },
  {
    "renderMode": 2,
    "route": "/productos"
  },
  {
    "renderMode": 2,
    "redirectTo": "/inicio",
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 949, hash: 'f5ad9581adcc6c275bc24359e9d7d7fd02a034813c860afa5ccb5832e329b8e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1462, hash: 'ba0ee2b7f72d24d7068a8319353e41d3e592097357c0e19386f2b1680a29b8c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'acercade/index.html': {size: 2165, hash: '55da3fcc0b7b7d5adda162805a9fe3750c331b156805abdfb17f4e36a27878a7', text: () => import('./assets-chunks/acercade_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 2165, hash: '55da3fcc0b7b7d5adda162805a9fe3750c331b156805abdfb17f4e36a27878a7', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 2165, hash: '55da3fcc0b7b7d5adda162805a9fe3750c331b156805abdfb17f4e36a27878a7', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'pipe/index.html': {size: 2165, hash: '55da3fcc0b7b7d5adda162805a9fe3750c331b156805abdfb17f4e36a27878a7', text: () => import('./assets-chunks/pipe_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
