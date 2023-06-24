describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should create a new table row element with proper values', function() {
    submitServerInfo();
    updateServerTable();

    let serverTb = document.querySelectorAll('#serverTable tbody tr td');

    expect(serverTb.length).toEqual(2);
    expect(serverTb[0].innerText).toEqual('Alice');
    expect(serverTb[1].innerText).toEqual('$0.00');

    expect()
  })

  afterEach(function() {
    serverTbody.innerHTML = '';
    serverId = 0;
    allServers = {};
  });
});
