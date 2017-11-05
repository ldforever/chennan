'use strict';
define(function(require, exports, module) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    //声明一个父类

    var praiseButton = function() {
        function praiseButton(num, element) {
            _classCallCheck(this, praiseButton);

            this.num = 0;
            this.element = element;
        }

        _createClass(praiseButton, [{
            key: 'clickAction',
            value: function clickAction() {
                var _this = this;

                this.element.click(function() {
                    if (_this.num < 10) {
                        _this.num++;
                        $('#animation').addClass('num');
                        setTimeout(function() {
                            $('#animation').removeClass('num');
                        }, 1000);
                        _this.element.css('-webkit-filter', 'grayscale(0)');
                    } else {
                        _this.element.css('-webkit-filter', 'grayscale(1)');
                        _this.num = 0;
                    }
                    console.log(_this.num);
                });
            }
        }]);

        return praiseButton;
    }();
    //创建并继承大拇指子类


    var thumb = function(_praiseButton) {
        _inherits(thumb, _praiseButton);

        function thumb(num, element) {
            _classCallCheck(this, thumb);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(thumb).call(this, num, element));
        }

        return thumb;
    }(praiseButton);
    //输出thumb模块


    exports.thumb = thumb;
});