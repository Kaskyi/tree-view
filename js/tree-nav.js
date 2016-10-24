function treeNav() {

    var roots = [];

    function showChieldNodes(root) {
        for (var i = 0; i < root.childNodes.length; i++) {
            if (root.childNodes[i].className) {
                if (root.childNodes[i].className.indexOf('tree-node') !== -1) {
                    root.childNodes[i].style.display = 'block';
                }
            }
        }
    }

    function hideChieldNodes(root) {
        for (var i = 0; i < root.childNodes.length; i++) {
            if (root.childNodes[i].className) {
                if (root.childNodes[i].className.indexOf('tree-node') !== -1) {
                    root.childNodes[i].style.display = 'none';
                }
            }
        }
    }

    function tree_nav() {

        function init() {
            roots = document.getElementsByClassName('tree-root');
            showChieldNodes(roots[0]);

            for (root of roots) {
                for (var i = 0; i < root.childNodes.length; i++) {
                    if (root.childNodes[i].className && root.childNodes[i].className.indexOf('tree-node') !== -1) {
                        var link = root.childNodes[i].getElementsByClassName('tree-trigger')[0];
                        link.addEventListener("click", function() {

                            if (this.parentNode) {
                                var treeNode = this.parentNode;
                                if (treeNode.parentNode) {
                                    var treeroot = treeNode.parentNode;
                                    for (var i = 0; i < treeroot.childNodes.length; i++) {
                                        hideChieldNodes(treeroot.childNodes[i]);
                                    }
                                }
                                treeNode.style.display = 'block';
                                showChieldNodes(treeNode);
                            }
                        });

                    }
                }
            }

        }

        init();
    }
    return tree_nav();
}
treeNav();
