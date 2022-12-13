import React from "react";
import useScript from "utils/hook/useScript";
import $ from "jquery";

export default function ImportScript() {
  useScript("/theme/js/perfect-scrollbar.jquery.min.js");
  useScript("/theme/js/waves.js");
  useScript("/theme/js/sidebarmenu.js");
  useScript("/theme/node_modules/raphael/raphael-min.js");
  useScript("/theme/node_modules/morrisjs/morris.min.js");
  useScript("/theme/node_modules/jquery-sparkline/jquery.sparkline.min.js");
  useScript("/theme/node_modules/toast-master/js/jquery.toast.js");
  useScript("/theme/node_modules/select2/dist/js/select2.full.min.js");
  useScript(
    "/theme/node_modules/Magnific-Popup-master/dist/jquery.magnific-popup.min.js"
  );
  useScript("/theme/js/jquery.onepage-scroll.js");
  useScript("/theme/js/drag-arrange.min.js");
  useScript("/theme/js/slick.min.js");
  useScript("/theme/js/custom.js");

  return <></>;
}
