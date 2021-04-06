<!-- Required Material Web JavaScript library -->
<script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
<script>
  function initTabs(el) {
    var tabBar = window.dynamicTabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.' + el));
    var panels = document.querySelector('.panels');

    function updatePanel(index) {
      var activePanel = panels.querySelector('.panel.active');
      if (activePanel) {
        activePanel.classList.remove('active');
      }
      var newActivePanel = panels.querySelector('.panel:nth-child(' + (index + 1) + ')');
      if (newActivePanel) {
        newActivePanel.classList.add('active');
      }
    }

    dynamicTabBar.listen('MDCTabBar:activated', function(t) {
      var tabs = t.detail;
      var nthChildIndex = tabs.index;

      updatePanel(nthChildIndex);
    });
  }

initTabs('mdc-tab-bar');

</script>
