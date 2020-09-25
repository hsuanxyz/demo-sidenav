module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:8080/'],
      startServerCommand: 'http-server dist/sidenav -a localhost',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
