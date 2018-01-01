let util = {};

util.title = function (title) {
    title = title ? title + ' - QMY' : '轻麦科技 - QMY';
    window.document.title = title;
};

export default util;
