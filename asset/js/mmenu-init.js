document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu( "#menu", {
            "slidingSubmenus": false
        }, {
            // configuration
            classNames: {
                selected: "active",
                vertical: "expand"
            },
            offCanvas: {
                page: {
                    selector: "#oc-container"
                }
            }
        });
    }
);
