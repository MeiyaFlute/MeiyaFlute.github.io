System.register("chunks:///_virtual/AssetsLoader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMain.ts', './JsonHelper.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, assetManager, Prefab, Component, GameMain, JsonHelper;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
      Prefab = module.Prefab;
      Component = module.Component;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      JsonHelper = module.JsonHelper;
    }],
    execute: function () {
      var _dec, _class2, _class3;
      cclegacy._RF.push({}, "5fd867Tx5JESJtG4VURIZ2M", "AssetsLoader", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BundleDefine = exports('BundleDefine', function BundleDefine() {});
      BundleDefine.view = "gamepanel";
      var AssetsLoader = exports('AssetsLoader', (_dec = ccclass('AssetsLoader'), _dec(_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AssetsLoader, _Component);
        function AssetsLoader() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.abCache = new Map();
          _this.uiBundle = null;
          return _this;
        }
        var _proto = AssetsLoader.prototype;
        _proto.init = function init() {
          var _this2 = this;
          AssetsLoader.instance = this;
          assetManager.loadBundle(BundleDefine.view, function (error, ab) {
            if (error) {
              console.log("ssetManager.loadBundle Faild " + error);
              return;
            }
            console.log("ssetManager.loadBundle success " + JsonHelper.ToJson(ab));
            _this2.uiBundle = ab;
            _this2.abCache.set("ui", ab);
            GameMain.instance.onInitBack();
          });
        };
        _proto.getUI = function getUI(uiPath, onComplete) {
          ///var uiab: AssetManager.Bundle = this.abCache.get(BundleDefine.view);
          console.log("getUI  开始加载  uiPath " + uiPath + "  " + JsonHelper.ToJson(this.uiBundle));
          this.uiBundle.load(uiPath, Prefab, function (error, data) {
            if (error) {
              console.log("getUI Faild " + error + "  uiPath " + uiPath);
              return;
            }
            console.log("getUI success " + "  uiPath " + uiPath);
            onComplete(error, data);
          });
        };
        return AssetsLoader;
      }(Component), _class3.instance = void 0, _class3)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChatController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "24d4cn56VlEiqKgfE5D3gyE", "ChatController", undefined);
      // 正确路径

      // import 'whatwg-fetch';
      // import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ChatController = exports('ChatController', (_dec = ccclass('ChatController'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChatController, _Component);
        function ChatController() {
          return _Component.apply(this, arguments) || this;
        }
        return ChatController;
      }(Component)) || _class));

      // 在其他脚本中使用
      // import { HttpHelper, ApiResult } from './HttpHelper';

      // // 设置认证令牌
      // HttpHelper.setAuthToken("your-jwt-token");

      // // GET 请求示例
      // const requestData = { userId: 123, page: 1 };
      // HttpHelper.Get<YourResponseType>("/user/info", requestData, (result: YourResponseType | null) => {
      //     if (result) {
      //         console.log("GET 请求成功:", result);
      //     } else {
      //         console.log("GET 请求失败");
      //     }
      // });

      // // POST 请求示例
      // const postData = { username: "test", password: "123456" };
      // HttpHelper.Post("/user/login", postData, (result: ApiResult | null) => {
      //     if (result && result.code === 200) {
      //         console.log("登录成功:", result.data);
      //         // 保存 token
      //         if (result.data.token) {
      //             HttpHelper.setAuthToken(result.data.token);
      //         }
      //     } else {
      //         console.log("登录失败:", result?.message);
      //     }
      // });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CreatRoomView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _createClass, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, EditBox, Button, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "94c27qW1utO/7PCbOOfOwNa", "CreatRoomView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CreatRoomView = exports('CreatRoomView', (_dec = ccclass('CreatRoomView'), _dec2 = property({
        type: EditBox
      }), _dec3 = property({
        type: EditBox
      }), _dec4 = property({
        type: EditBox
      }), _dec5 = property({
        type: Button
      }), _dec6 = property({
        type: Button
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CreatRoomView, _Component);
        function CreatRoomView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "roomNameField", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "passwordField", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betField", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enterBtn", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeBtn", _descriptor5, _assertThisInitialized(_this));
          // 创建房间数据对象
          _this._createRoomData = new CreateRoomData();
          return _this;
        }
        var _proto = CreatRoomView.prototype;
        _proto.onLoad = function onLoad() {
          this.initButtonEvents();
          this.initEditBoxEvents();
        }

        // 初始化按钮点击事件
        ;

        _proto.initButtonEvents = function initButtonEvents() {
          if (this.enterBtn) {
            this.enterBtn.node.on(Button.EventType.CLICK, this.onEnterClick, this);
          }
          if (this.closeBtn) {
            this.closeBtn.node.on(Button.EventType.CLICK, this.onCloseClick, this);
          }
        }

        // 初始化输入框事件
        ;

        _proto.initEditBoxEvents = function initEditBoxEvents() {
          if (this.roomNameField) {
            this.roomNameField.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onRoomNameEndEdit, this);
            this.roomNameField.node.on(EditBox.EventType.TEXT_CHANGED, this.onRoomNameChanged, this);
          }
          if (this.passwordField) {
            this.passwordField.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onPasswordEndEdit, this);
            this.passwordField.node.on(EditBox.EventType.TEXT_CHANGED, this.onPasswordChanged, this);
          }
          if (this.betField) {
            this.betField.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onBetEndEdit, this);
            this.betField.node.on(EditBox.EventType.TEXT_CHANGED, this.onBetChanged, this);
          }
        }

        // 输入框变化事件
        ;

        _proto.onRoomNameChanged = function onRoomNameChanged(editBox) {
          this._createRoomData.roomName = editBox.string.trim();
          this.validateInput();
        };
        _proto.onPasswordChanged = function onPasswordChanged(editBox) {
          this._createRoomData.password = editBox.string.trim();
        };
        _proto.onBetChanged = function onBetChanged(editBox) {
          var betValue = parseInt(editBox.string);
          this._createRoomData.betAmount = isNaN(betValue) ? 0 : betValue;
          this.validateInput();
        }

        // 输入结束事件
        ;

        _proto.onRoomNameEndEdit = function onRoomNameEndEdit(editBox) {
          this._createRoomData.roomName = editBox.string.trim();
          console.log('Room name:', this._createRoomData.roomName);
        };
        _proto.onPasswordEndEdit = function onPasswordEndEdit(editBox) {
          this._createRoomData.password = editBox.string.trim();
          console.log('Password:', this._createRoomData.password);
        };
        _proto.onBetEndEdit = function onBetEndEdit(editBox) {
          var betValue = parseInt(editBox.string);
          this._createRoomData.betAmount = isNaN(betValue) ? 0 : betValue;
          console.log('Bet amount:', this._createRoomData.betAmount);
        }

        // 验证输入
        ;

        _proto.validateInput = function validateInput() {
          if (this.enterBtn) {
            this.enterBtn.interactable = this._createRoomData.isValid();
          }
        }

        // 进入按钮点击事件
        ;

        _proto.onEnterClick = function onEnterClick() {
          if (!this._createRoomData.isValid()) {
            console.warn('输入数据无效');
            return;
          }
          console.log('创建房间数据:', this._createRoomData);

          // 发送数据到服务器
          this.sendCreateRoomRequest();
        }

        // 发送创建房间请求到服务器
        ;

        _proto.sendCreateRoomRequest = /*#__PURE__*/
        function () {
          var _sendCreateRoomRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var serverData, success;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  serverData = this._createRoomData.toServerFormat();
                  console.log('发送到服务器的数据:', serverData);

                  // 这里调用您的网络请求方法
                  // const response = await NetworkManager.createRoom(serverData);

                  // 模拟网络请求
                  _context.next = 5;
                  return this.mockCreateRoomRequest(serverData);
                case 5:
                  success = _context.sent;
                  if (success) {
                    console.log('房间创建成功');
                    this.clearInputs();
                  } else {
                    console.error('房间创建失败');
                  }
                  _context.next = 12;
                  break;
                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](0);
                  console.error('创建房间请求错误:', _context.t0);
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[0, 9]]);
          }));
          function sendCreateRoomRequest() {
            return _sendCreateRoomRequest.apply(this, arguments);
          }
          return sendCreateRoomRequest;
        }() // 模拟网络请求
        ;

        _proto.mockCreateRoomRequest = /*#__PURE__*/
        function () {
          var _mockCreateRoomRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise(function (resolve) {
                    setTimeout(function () {
                      // 模拟成功或失败
                      resolve(Math.random() > 0.3);
                    }, 1000);
                  }));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function mockCreateRoomRequest(_x) {
            return _mockCreateRoomRequest.apply(this, arguments);
          }
          return mockCreateRoomRequest;
        }() // 关闭按钮点击事件
        ;

        _proto.onCloseClick = function onCloseClick() {
          console.log('关闭创建面板');
          this.node.active = false;
          this.clearInputs();
        }

        // 获取当前创建房间数据
        ;

        _proto.getCreateRoomData = function getCreateRoomData() {
          return this._createRoomData.clone();
        }

        // 设置创建房间数据（用于编辑等场景）
        ;

        _proto.setCreateRoomData = function setCreateRoomData(data) {
          this._createRoomData = data.clone();
          this.updateUIFromData();
        }

        // 根据数据更新UI
        ;

        _proto.updateUIFromData = function updateUIFromData() {
          if (this.roomNameField) {
            this.roomNameField.string = this._createRoomData.roomName;
          }
          if (this.passwordField) {
            this.passwordField.string = this._createRoomData.password;
          }
          if (this.betField) {
            this.betField.string = this._createRoomData.betAmount.toString();
          }
          this.validateInput();
        }

        // 清空输入框和数据
        ;

        _proto.clearInputs = function clearInputs() {
          this._createRoomData.clear();
          if (this.roomNameField) {
            this.roomNameField.string = '';
          }
          if (this.passwordField) {
            this.passwordField.string = '';
          }
          if (this.betField) {
            this.betField.string = '';
          }
          this.validateInput();
        };
        _proto.onDestroy = function onDestroy() {
          // 移除事件监听
          this.removeAllEventListeners();
        };
        _proto.removeAllEventListeners = function removeAllEventListeners() {
          if (this.enterBtn) {
            this.enterBtn.node.off(Button.EventType.CLICK, this.onEnterClick, this);
          }
          if (this.closeBtn) {
            this.closeBtn.node.off(Button.EventType.CLICK, this.onCloseClick, this);
          }
          if (this.roomNameField) {
            this.roomNameField.node.off(EditBox.EventType.EDITING_DID_ENDED, this.onRoomNameEndEdit, this);
            this.roomNameField.node.off(EditBox.EventType.TEXT_CHANGED, this.onRoomNameChanged, this);
          }
          if (this.passwordField) {
            this.passwordField.node.off(EditBox.EventType.EDITING_DID_ENDED, this.onPasswordEndEdit, this);
            this.passwordField.node.off(EditBox.EventType.TEXT_CHANGED, this.onPasswordChanged, this);
          }
          if (this.betField) {
            this.betField.node.off(EditBox.EventType.EDITING_DID_ENDED, this.onBetEndEdit, this);
            this.betField.node.off(EditBox.EventType.TEXT_CHANGED, this.onBetChanged, this);
          }
        };
        return CreatRoomView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roomNameField", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "passwordField", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "betField", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enterBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      // CreateRoomData.ts
      var CreateRoomData = exports('CreateRoomData', /*#__PURE__*/function () {
        function CreateRoomData(roomName, password, betAmount) {
          /** 房间名称 */
          this.roomName = '';
          /** 密码 */
          this.password = '';
          /** 赌注金额 */
          this.betAmount = 0;
          if (roomName) this.roomName = roomName;
          if (password) this.password = password;
          if (betAmount) this.betAmount = betAmount;
        }

        /** 验证数据是否有效 */
        var _proto2 = CreateRoomData.prototype;
        _proto2.isValid = function isValid() {
          return this.roomName.length > 0 && this.betAmount > 0;
        }

        /** 转换为服务器需要的格式 */;
        _proto2.toServerFormat = function toServerFormat() {
          return {
            roomName: this.roomName,
            password: this.password,
            betAmount: this.betAmount,
            needPassword: this.needPassword,
            timestamp: Date.now()
          };
        }

        /** 清空数据 */;
        _proto2.clear = function clear() {
          this.roomName = '';
          this.password = '';
          this.betAmount = 0;
        }

        /** 克隆对象 */;
        _proto2.clone = function clone() {
          return new CreateRoomData(this.roomName, this.password, this.betAmount);
        };
        _createClass(CreateRoomData, [{
          key: "needPassword",
          get: /** 是否需要密码 */
          function get() {
            return this.password.length > 0;
          }
        }]);
        return CreateRoomData;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIManager.ts', './StorageUtil.ts', './LanguageCore.ts', './AssetsLoader.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Component, UIManager, StorageUtil, LanguageCore, AssetsLoader;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      UIManager = module.UIManager;
    }, function (module) {
      StorageUtil = module.StorageUtil;
    }, function (module) {
      LanguageCore = module.LanguageCore;
    }, function (module) {
      AssetsLoader = module.AssetsLoader;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3;
      cclegacy._RF.push({}, "17b5f338Q9AyqPPrAW0G32r", "GameMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameMain = exports('GameMain', (_dec = ccclass('GameMain'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: AssetsLoader
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameMain, _Component);
        function GameMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "uiroot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "assetsLoader", _descriptor2, _assertThisInitialized(_this));
          _this.savedPlayerData = void 0;
          _initializerDefineProperty(_this, "languageSet", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "usedBundle", _descriptor4, _assertThisInitialized(_this));
          _this.accountFullInfo = null;
          return _this;
        }
        var _proto = GameMain.prototype;
        _proto.start = function start() {
          GameMain.instance = this;
          if (this.usedBundle) {
            this.assetsLoader.init();
          } else {
            this.onInitBack();
          }
        };
        _proto.onInitBack = function onInitBack() {
          this.savedPlayerData = StorageUtil.getObject("localLoginData", {
            account: '',
            password: '',
            remenberMe: true,
            headIndex: 0,
            currencyIndex: 0,
            lastCurrency: '',
            musinOn: true
          });
          LanguageCore.loadLanguage(this.languageSet);

          //获取
          UIManager.I.init(this.uiroot);
          UIManager.I.open('ui/LoginPanel');
        };
        _proto.update = function update(deltaTime) {}

        //定义获取玩家信息的值
        ;

        _proto.doSavedPlayerData = function doSavedPlayerData() {
          StorageUtil.setObject("localLoginData", this.savedPlayerData);
        };
        _createClass(GameMain, [{
          key: "Account",
          get: function get() {
            return this.accountFullInfo.account;
          }
        }, {
          key: "AccountData",
          get: function get() {
            return this.accountFullInfo.accountData;
          }
        }]);
        return GameMain;
      }(Component), _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiroot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "assetsLoader", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "languageSet", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'zh';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "usedBundle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HttpHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JsonHelper.ts', './NetPort.ts', './TipPanel.ts', './GameMain.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, JsonHelper, NetPort, TipPanel, GameMain;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      JsonHelper = module.JsonHelper;
    }, function (module) {
      NetPort = module.NetPort;
    }, function (module) {
      TipPanel = module.TipPanel;
    }, function (module) {
      GameMain = module.GameMain;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "c4f716ttotPmpZMFramSoqy", "HttpHelper", undefined);
      // 使用 class-transformer 等库

      var ccclass = _decorator.ccclass;

      // API 结果接口

      //{"":0,"data":["MYR","RMB"],"isSuccessful":true
      // 请求接口
      var HttpHelper = exports('HttpHelper', (_dec = ccclass('HttpHelper'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HttpHelper, _Component);
        function HttpHelper() {
          return _Component.apply(this, arguments) || this;
        }
        HttpHelper.getCurrencyStr = function getCurrencyStr(id) {
          if (id >= this.CurrencyName.length) {
            id = 0;
          }
          return this.CurrencyName[id];
        }

        // 设置认证令牌
        ;

        HttpHelper.setAuthToken = function setAuthToken(token) {
          HttpHelper.authToken = token;
        }

        // 获取认证令牌
        ;

        HttpHelper.getAuthToken = function getAuthToken() {
          return HttpHelper.authToken;
        };
        HttpHelper.doLogin = /*#__PURE__*/function () {
          var _doLogin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(loginC2S, actionBackToken) {
            var response;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return HttpHelper.post(NetPort.PostLogin, loginC2S);
                case 3:
                  response = _context.sent;
                  if (response != null) {
                    this.authToken = response.data.toString();
                    actionBackToken == null || actionBackToken(this.authToken, response.errorCode);
                  } else {
                    TipPanel.showTips("Login Failed");
                  }
                  _context.next = 11;
                  break;
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);
                  console.error("Login error:", _context.t0);
                  TipPanel.showTips("Login Failed");
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[0, 7]]);
          }));
          function doLogin(_x, _x2) {
            return _doLogin.apply(this, arguments);
          }
          return doLogin;
        }()
        /**
         * 注册
         */;

        HttpHelper.signInClick = /*#__PURE__*/
        function () {
          var _signInClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(email) {
            var api;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  api = NetPort.PostRegister.replace("{0}", email);
                  _context2.next = 4;
                  return HttpHelper.post(api, null);
                case 4:
                  _context2.next = 9;
                  break;
                case 6:
                  _context2.prev = 6;
                  _context2.t0 = _context2["catch"](0);
                  console.error("Sign in error:", _context2.t0);
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[0, 6]]);
          }));
          function signInClick(_x3) {
            return _signInClick.apply(this, arguments);
          }
          return signInClick;
        }()
        /**
         * 重置密码
         */;

        HttpHelper.resetPassword = /*#__PURE__*/
        function () {
          var _resetPassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(email) {
            var api;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  api = NetPort.PostResetPassword.replace("{0}", email);
                  _context3.next = 4;
                  return this.post(api, null);
                case 4:
                  _context3.next = 9;
                  break;
                case 6:
                  _context3.prev = 6;
                  _context3.t0 = _context3["catch"](0);
                  console.error("Reset password error:", _context3.t0);
                case 9:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[0, 6]]);
          }));
          function resetPassword(_x4) {
            return _resetPassword.apply(this, arguments);
          }
          return resetPassword;
        }();
        HttpHelper.getAccount = /*#__PURE__*/function () {
          var _getAccount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(action) {
            var accountInfo;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return this.get(NetPort.GetAccount, null);
                case 3:
                  accountInfo = _context4.sent;
                  if (accountInfo != null) {
                    // PlayerData.setAccountFullInfo(accountInfo);
                    GameMain.instance.accountFullInfo = accountInfo;
                  }
                  action == null || action(accountInfo);
                  _context4.next = 12;
                  break;
                case 8:
                  _context4.prev = 8;
                  _context4.t0 = _context4["catch"](0);
                  console.error("Get account error:", _context4.t0);
                  action == null || action(null);
                case 12:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[0, 8]]);
          }));
          function getAccount(_x5) {
            return _getAccount.apply(this, arguments);
          }
          return getAccount;
        }();
        HttpHelper.getCurrency = /*#__PURE__*/function () {
          var _getCurrency = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(action) {
            var _currencies;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return this.get(NetPort.GetCurrencys, null);
                case 3:
                  _currencies = _context5.sent;
                  action == null || action(_currencies);
                  _context5.next = 11;
                  break;
                case 7:
                  _context5.prev = 7;
                  _context5.t0 = _context5["catch"](0);
                  console.error("Get currency error:", _context5.t0);
                  action == null || action(null);
                case 11:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this, [[0, 7]]);
          }));
          function getCurrency(_x6) {
            return _getCurrency.apply(this, arguments);
          }
          return getCurrency;
        }()
        /**
         * GET 请求
         * @param api API 路径
         * @param request 请求参数
         * @returns Promise<T | null>
         */;

        HttpHelper.get = /*#__PURE__*/
        function () {
          var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(api, request) {
            var apiSet, uploadData, finalUrl, params, _key, apiResult;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.prev = 0;
                  apiSet = NetPort.httpApi + api;
                  uploadData = request ? JsonHelper.ToJson(request) : ""; // 将 GET 参数拼接到 URL 中
                  finalUrl = apiSet;
                  if (request && Object.keys(request).length > 0) {
                    params = new URLSearchParams();
                    for (_key in request) {
                      if (request.hasOwnProperty(_key)) {
                        params.append(_key, request[_key].toString());
                      }
                    }
                    finalUrl += '?' + params.toString();
                  }
                  _context6.next = 7;
                  return HttpHelper.postRequest(finalUrl, uploadData, false);
                case 7:
                  apiResult = _context6.sent;
                  if (!(apiResult && apiResult.data !== null && apiResult.data !== undefined)) {
                    _context6.next = 19;
                    break;
                  }
                  _context6.prev = 9;
                  return _context6.abrupt("return", apiResult.data);
                case 13:
                  _context6.prev = 13;
                  _context6.t0 = _context6["catch"](9);
                  console.error("JSON 解析错误:", _context6.t0);
                  return _context6.abrupt("return", null);
                case 17:
                  _context6.next = 20;
                  break;
                case 19:
                  return _context6.abrupt("return", null);
                case 20:
                  _context6.next = 26;
                  break;
                case 22:
                  _context6.prev = 22;
                  _context6.t1 = _context6["catch"](0);
                  console.error("GET 请求错误:", _context6.t1);
                  return _context6.abrupt("return", null);
                case 26:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, null, [[0, 22], [9, 13]]);
          }));
          function get(_x7, _x8) {
            return _get.apply(this, arguments);
          }
          return get;
        }()
        /**
         * POST 请求
         * @param api API 路径
         * @param request 请求参数
         * @returns Promise<ApiResult | null>
         */;

        HttpHelper.post = /*#__PURE__*/
        function () {
          var _post = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(api, request) {
            var apiSet, uploadData;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  apiSet = NetPort.httpApi + api;
                  uploadData = request ? JsonHelper.ToJson(request) : "";
                  _context7.next = 5;
                  return HttpHelper.postRequest(apiSet, uploadData, true);
                case 5:
                  return _context7.abrupt("return", _context7.sent);
                case 8:
                  _context7.prev = 8;
                  _context7.t0 = _context7["catch"](0);
                  console.error("POST 请求错误:", _context7.t0);
                  return _context7.abrupt("return", null);
                case 12:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, null, [[0, 8]]);
          }));
          function post(_x9, _x10) {
            return _post.apply(this, arguments);
          }
          return post;
        }()
        /**
         * 发送 HTTP 请求
         * @param url 完整 URL
         * @param postData POST 数据
         * @param isPost 是否为 POST 请求
         * @returns Promise<ApiResult | null>
         */;

        HttpHelper.postRequest = /*#__PURE__*/
        function () {
          var _postRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(url, postData, isPost) {
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  return _context8.abrupt("return", new Promise(function (resolve) {
                    // 使用 XMLHttpRequest 发送请求
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function () {
                      if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                          // 请求成功
                          try {
                            console.log("Received: " + xhr.responseText);
                            var apiResult = JsonHelper.DecodeJson(xhr.responseText);
                            resolve(apiResult);
                          } catch (error) {
                            console.error("响应解析错误:", error, "Response:", xhr.responseText);
                            resolve(null);
                          }
                        } else {
                          // 请求失败
                          console.error("HTTP Error: " + xhr.status, "URL:", url, "Response:", xhr.responseText);
                          resolve(null);
                        }
                      }
                    };
                    xhr.onerror = function () {
                      console.error("Network Error", "URL:", url);
                      resolve(null);
                    };
                    xhr.ontimeout = function () {
                      console.error("Request Timeout", "URL:", url);
                      resolve(null);
                    };
                    var method = isPost ? "POST" : "GET";
                    xhr.open(method, url, true);

                    // 设置超时时间（可选）
                    xhr.timeout = 10000; // 10秒超时

                    // 设置请求头
                    xhr.setRequestHeader("Content-Type", "application/json");
                    if (HttpHelper.authToken) {
                      xhr.setRequestHeader("Authorization", "Bearer " + HttpHelper.authToken);
                    }

                    // 发送请求
                    if (isPost && postData) {
                      xhr.send(postData);
                    } else {
                      xhr.send();
                    }
                  }));
                case 1:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          }));
          function postRequest(_x11, _x12, _x13) {
            return _postRequest.apply(this, arguments);
          }
          return postRequest;
        }()
        /**
         * 安全调用回调函数
         * @param action 回调函数
         * @param data 回调数据
         */;

        HttpHelper.safeInvoke = function safeInvoke(action, data) {
          try {
            if (action) {
              action(data);
            }
          } catch (error) {
            console.error("回调函数执行错误:", error);
          }
        }

        //     /**
        //      * GET 请求
        //      * @param api API 路径
        //      * @param request 请求参数
        //      * @param action 回调函数
        //      */
        //     public static Get<T>(api: string, request: IRequest | null, action: (data: T | null) => void): void {
        //         const apiSet = NetPort.httpApi + api;
        //         const uploadData = request ? JsonHelper.ToJson(request) : "";

        //         // 将 GET 参数拼接到 URL 中
        //         let finalUrl = apiSet;
        //         if (request && Object.keys(request).length > 0) {
        //             const params = new URLSearchParams();
        //             for (const key in request) {
        //                 if (request.hasOwnProperty(key)) {
        //                     params.append(key, request[key].toString());
        //                 }
        //             }
        //             finalUrl += '?' + params.toString();
        //         }

        //         HttpHelper.PostRequest(finalUrl, uploadData, false, (apiResult: ApiResult | null) => {
        //             if (apiResult && apiResult.data !== null && apiResult.data !== undefined) {
        //                 try {
        //                     const t: T = JsonHelper.DecodeJson<T>(apiResult.data);
        //                     HttpHelper.SafeInvoke(action, t);
        //                 } catch (error) {
        //                     console.error("JSON 解析错误:", error);
        //                     HttpHelper.SafeInvoke(action, null);
        //                 }
        //             } else {
        //                 HttpHelper.SafeInvoke(action, null);
        //             }
        //         });
        //     }

        //     /**
        //      * POST 请求
        //      * @param api API 路径
        //      * @param request 请求参数
        //      * @param action 回调函数
        //      */
        //     public static Post(api: string, request: IRequest | null, action: (data: ApiResult | null) => void): void {
        //         const apiSet = NetPort.httpApi + api;
        //         const uploadData = request ? JsonHelper.ToJson(request) : "";

        //         HttpHelper.PostRequest(apiSet, uploadData, true, (apiResult: ApiResult | null) => {
        //             HttpHelper.SafeInvoke(action, apiResult);
        //         });
        //     }

        //     /**
        //      * 发送 HTTP 请求
        //      * @param url 完整 URL
        //      * @param postData POST 数据
        //      * @param isPost 是否为 POST 请求
        //      * @param action 回调函数
        //      */
        //     private static PostRequest(url: string, postData: string, isPost: boolean, action: (data: ApiResult | null) => void): void {
        //         // 使用 Cocos 的 http 模块发送请求
        //         const xhr = new XMLHttpRequest();

        //         xhr.onreadystatechange = () => {
        //             if (xhr.readyState === XMLHttpRequest.DONE) {
        //                 if (xhr.status >= 200 && xhr.status < 300) {
        //                     // 请求成功
        //                     try {
        //                         console.log(`Received: ${xhr.responseText}`);
        //                         const apiResult: ApiResult = JsonHelper.DecodeJson<ApiResult>(xhr.responseText);
        //                         action(apiResult);
        //                     } catch (error) {
        //                         console.error("响应解析错误:", error, "Response:", xhr.responseText);
        //                         action(null);
        //                     }
        //                 } else {
        //                     // 请求失败
        //                     console.error(`HTTP Error: ${xhr.status}`, "URL:", url, "Response:", xhr.responseText);

        //                     // 显示错误提示（需要您自己实现 TipPanel）
        //                     // TipPanel.ShowTips(`Received: ${xhr.responseText} Error: ${xhr.status} URL: ${url}`, 10);

        //                     action(null);
        //                 }
        //             }
        //         };

        //         xhr.onerror = () => {
        //             console.error("Network Error", "URL:", url);
        //             // TipPanel.ShowTips(`Network Error URL: ${url}`, 10);
        //             action(null);
        //         };

        //         const method = isPost ? "POST" : "GET";
        //         xhr.open(method, url, true);

        //         // 设置请求头
        //         xhr.setRequestHeader("Content-Type", "application/json");
        //         if (HttpHelper.authToken) {
        //             xhr.setRequestHeader("Authorization", "Bearer " + HttpHelper.authToken);
        //         }

        //    xhr.setRequestHeader("Access-Control-Allow-Origin", "");
        //  xhr.setRequestHeader("Access-Control-Allow-Header", "");

        //         // 发送请求
        //         if (isPost && postData) {
        //             xhr.send(postData);
        //         } else {
        //             xhr.send();
        //         }
        //     }

        //     /**
        //      * 安全调用回调函数
        //      * @param action 回调函数
        //      * @param data 回调数据
        //      */
        //     private static SafeInvoke<T>(action: (data: T | null) => void, data: T | null): void {
        //         try {
        //             if (action) {
        //                 action(data);
        //             }
        //         } catch (error) {
        //             console.error("回调函数执行错误:", error);
        //         }
        //     }
        ;

        return HttpHelper;
      }(Component), _class2.authToken = "", _class2.CurrencyName = ["RMB", "USD", "MYR"], _class2.CurrencyList = [], _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InfiniteScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RoomItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, ScrollView, instantiate, UITransform, math, Component, RoomItem;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      ScrollView = module.ScrollView;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      math = module.math;
      Component = module.Component;
    }, function (module) {
      RoomItem = module.RoomItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "41cc7kidHxJnqnsSyXPsbBM", "InfiniteScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var InfiniteScrollView = exports('InfiniteScrollView', (_dec = ccclass('InfiniteScrollView'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: ScrollView
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(InfiniteScrollView, _Component);
        function InfiniteScrollView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "roomItemPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemHeight", _descriptor4, _assertThisInitialized(_this));
          // 每个item的高度
          _initializerDefineProperty(_this, "bufferSize", _descriptor5, _assertThisInitialized(_this));
          // 缓冲区大小
          _this.pool = [];
          // 对象池
          _this.visibleItems = [];
          // 当前可见的item
          _this.allRoomData = [];
          // 所有数据
          _this.totalItemCount = 0;
          // 总item数量
          _this.scrollOffset = 0;
          // 滚动偏移量
          _this.isInitialized = false;
          return _this;
        }
        var _proto = InfiniteScrollView.prototype;
        _proto.onLoad = function onLoad() {
          this.initializePool();
          this.setupScrollEvents();
          this.isInitialized = true;
        }

        // 初始化对象池
        ;

        _proto.initializePool = function initializePool() {
          if (!this.roomItemPrefab || !this.contentNode) return;

          // 计算需要创建的item数量（屏幕可见数量 + 缓冲区）
          var viewHeight = this.getViewHeight();
          var visibleCount = Math.ceil(viewHeight / this.itemHeight) + this.bufferSize * 2;
          console.log("Initializing pool with " + visibleCount + " items, view height: " + viewHeight);
          for (var i = 0; i < visibleCount; i++) {
            var itemNode = instantiate(this.roomItemPrefab);
            this.pool.push(itemNode);
            itemNode.active = false;
            itemNode.setParent(this.contentNode);
          }
        }

        // 设置滚动事件监听
        ;

        _proto.setupScrollEvents = function setupScrollEvents() {
          if (this.scrollView) {
            this.scrollView.node.on(ScrollView.EventType.SCROLL_ENDED, this.onScroll, this);
            this.scrollView.node.on(ScrollView.EventType.SCROLLING, this.onScroll, this);
          }
        }

        // 初始化数据
        ;

        _proto.initializeData = function initializeData(roomData) {
          if (!this.isInitialized) {
            console.warn('Component not initialized yet');
            return;
          }
          this.allRoomData = roomData;
          this.totalItemCount = roomData.length;
          console.log("Initializing data with " + this.totalItemCount + " items");

          // 设置content高度
          this.updateContentSize();

          // 初始刷新
          this.refreshVisibleItems();
        }

        // 更新content大小
        ;

        _proto.updateContentSize = function updateContentSize() {
          if (this.contentNode) {
            var uiTransform = this.contentNode.getComponent(UITransform);
            if (uiTransform) {
              uiTransform.height = this.totalItemCount * this.itemHeight;
              console.log("Content height updated to: " + uiTransform.height);
            }
          }
        }

        // 获取视图高度
        ;

        _proto.getViewHeight = function getViewHeight() {
          if (this.scrollView && this.scrollView.node) {
            var uiTransform = this.scrollView.node.getComponent(UITransform);
            return uiTransform ? uiTransform.height : 600; // 默认高度
          }

          return 600;
        }

        // 获取当前滚动位置
        ;

        _proto.getScrollOffset = function getScrollOffset() {
          if (!this.scrollView) return 0;
          try {
            var offset = this.scrollView.getScrollOffset();
            return Math.max(0, offset.y); // 确保不为负数
          } catch (error) {
            console.warn('Error getting scroll offset:', error);
            return 0;
          }
        }

        // 滚动事件处理
        ;

        _proto.onScroll = function onScroll() {
          if (this.totalItemCount === 0) return;
          this.scrollOffset = this.getScrollOffset();
          this.refreshVisibleItems();
        }

        // 刷新可见的item
        ;

        _proto.refreshVisibleItems = function refreshVisibleItems() {
          if (this.totalItemCount === 0 || !this.contentNode) return;
          try {
            var startIndex = Math.max(0, Math.floor(this.scrollOffset / this.itemHeight));
            var visibleItemCount = Math.ceil(this.getViewHeight() / this.itemHeight);
            var endIndex = Math.min(startIndex + visibleItemCount + this.bufferSize * 2, this.totalItemCount - 1);
            console.log("Refreshing items from " + startIndex + " to " + endIndex + ", offset: " + this.scrollOffset);

            // 回收不可见的item
            this.recycleInvisibleItems(startIndex, endIndex);

            // 显示可见的item
            this.showVisibleItems(startIndex, endIndex);
          } catch (error) {
            console.error('Error in refreshVisibleItems:', error);
          }
        }

        // 回收不可见的item
        ;

        _proto.recycleInvisibleItems = function recycleInvisibleItems(startIndex, endIndex) {
          for (var i = this.visibleItems.length - 1; i >= 0; i--) {
            var item = this.visibleItems[i];
            var itemIndex = item.getItemIndex();
            if (itemIndex < startIndex - this.bufferSize || itemIndex > endIndex + this.bufferSize) {
              try {
                item.node.active = false;
                this.pool.push(item.node);
                this.visibleItems.splice(i, 1);
              } catch (error) {
                console.warn('Error recycling item:', error);
              }
            }
          }
        }

        // 显示可见的item
        ;

        _proto.showVisibleItems = function showVisibleItems(startIndex, endIndex) {
          var _this2 = this;
          var _loop = function _loop(i) {
              if (i >= _this2.totalItemCount) return 0; // break

              // 检查是否已经显示
              var existingItem = _this2.visibleItems.find(function (item) {
                return item.getItemIndex() === i;
              });
              if (!existingItem) {
                // 从池中获取或创建新的item
                var itemNode = null;
                if (_this2.pool.length > 0) {
                  itemNode = _this2.pool.pop();
                } else if (_this2.roomItemPrefab) {
                  itemNode = instantiate(_this2.roomItemPrefab);
                  if (_this2.contentNode) {
                    itemNode.setParent(_this2.contentNode);
                  }
                }
                if (!itemNode) {
                  console.warn('Failed to get item node from pool');
                  return 1; // continue
                }

                // 设置item位置
                var yPosition = -i * _this2.itemHeight - _this2.itemHeight / 2; // 居中显示
                itemNode.setPosition(0, yPosition);
                itemNode.active = true;
                var roomItem = itemNode.getComponent(RoomItem);
                if (roomItem) {
                  roomItem.updateItem(i, _this2.allRoomData[i]);
                  _this2.visibleItems.push(roomItem);
                }
              }
            },
            _ret;
          for (var i = startIndex; i <= endIndex; i++) {
            _ret = _loop(i);
            if (_ret === 0) break;
            if (_ret === 1) continue;
          }
        }

        // 更新单个item
        ;

        _proto.updateItem = function updateItem(index, roomInfo) {
          if (index >= 0 && index < this.totalItemCount) {
            this.allRoomData[index] = roomInfo;

            // 如果该item当前可见，则立即更新
            var visibleItem = this.visibleItems.find(function (item) {
              return item.getItemIndex() === index;
            });
            if (visibleItem) {
              visibleItem.updateItem(index, roomInfo);
            }
          }
        }

        // 添加新数据
        ;

        _proto.addData = function addData(roomInfo) {
          this.allRoomData.push(roomInfo);
          this.totalItemCount = this.allRoomData.length;
          this.updateContentSize();
          this.refreshVisibleItems();
        }

        // 移除数据
        ;

        _proto.removeData = function removeData(index) {
          if (index >= 0 && index < this.totalItemCount) {
            this.allRoomData.splice(index, 1);
            this.totalItemCount = this.allRoomData.length;

            // 回收所有item并重新刷新
            this.recycleAllItems();
            this.updateContentSize();
            this.refreshVisibleItems();
          }
        }

        // 回收所有item
        ;

        _proto.recycleAllItems = function recycleAllItems() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.visibleItems), _step; !(_step = _iterator()).done;) {
            var item = _step.value;
            try {
              item.node.active = false;
              this.pool.push(item.node);
            } catch (error) {
              console.warn('Error recycling all items:', error);
            }
          }
          this.visibleItems = [];
        }

        // 滚动到指定位置
        ;

        _proto.scrollTo = function scrollTo(index, animated) {
          if (animated === void 0) {
            animated = true;
          }
          if (index >= 0 && index < this.totalItemCount && this.scrollView) {
            var targetOffset = index * this.itemHeight;
            if (animated) {
              this.scrollView.scrollTo(new math.Vec2(0, targetOffset), 0.3);
            } else {
              this.scrollView.scrollToOffset(new math.Vec2(0, targetOffset));
            }
          }
        }

        // 清空所有数据
        ;

        _proto.clearAll = function clearAll() {
          this.allRoomData = [];
          this.totalItemCount = 0;
          this.recycleAllItems();
          this.updateContentSize();
        };
        _proto.onDestroy = function onDestroy() {
          if (this.scrollView) {
            this.scrollView.node.off(ScrollView.EventType.SCROLL_ENDED, this.onScroll, this);
            this.scrollView.node.off(ScrollView.EventType.SCROLLING, this.onScroll, this);
          }

          // 清理对象池
          this.pool.forEach(function (node) {
            if (node && node.isValid) {
              node.destroy();
            }
          });
          this.pool = [];
        };
        return InfiniteScrollView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roomItemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 120;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bufferSize", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JsonHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "98854HpnlhExrq35f8FotnO", "JsonHelper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var JsonHelper = exports('JsonHelper', (_dec = ccclass('JsonHelper'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(JsonHelper, _Component);
        function JsonHelper() {
          return _Component.apply(this, arguments) || this;
        }
        JsonHelper.ToJson = function ToJson(obj) {
          try {
            return JSON.stringify(obj);
          } catch (error) {
            console.error("JSON 序列化错误:", error);
            return "{}";
          }
        }

        /**
         * JSON 字符串转对象
         */;
        JsonHelper.DecodeJson = function DecodeJson(jsonString) {
          try {
            return JSON.parse(jsonString);
          } catch (error) {
            console.error("JSON 反序列化错误:", error, "String:", jsonString + "  ");
            if (typeof jsonString !== 'string') {
              console.warn("输入不是字符串", jsonString);
            }
            return {};
          }
        };
        JsonHelper.DecodeJson2 = function DecodeJson2(jsonString) {
          // return JSON.parse(jsonString) as T;
          try {
            jsonString = jsonString.toString();
            //1. 检查输入
            if (typeof jsonString !== 'string') {
              console.warn("输入不是字符串", jsonString);
              return {};
            }

            // 2. 去除BOM头（\uFEFF）
            var cleanString = jsonString.trim();
            if (cleanString.charCodeAt(0) === 0xFEFF) {
              cleanString = cleanString.substring(1);
            }

            // 3. 检查是否是JSONP格式
            if (cleanString.startsWith('callback(') && cleanString.endsWith(')')) {
              cleanString = cleanString.substring(9, cleanString.length - 1);
            }

            // 4. 解析JSON
            var result = JSON.parse(cleanString);
            return result;
          } catch (error) {
            console.error("JSON 反序列化错误:", error);
            console.error("问题字符串:", jsonString);
            return {};
          }
        };
        return JsonHelper;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LanguageCore.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, RichText, Component, resources;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      RichText = module.RichText;
      Component = module.Component;
      resources = module.resources;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "2775fC6NeBJn6MA+WraIZHD", "LanguageCore", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LanguageCore = exports('LanguageCore', (_dec = ccclass('LanguageCore'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: RichText
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LanguageCore, _Component);
        function LanguageCore() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "LanguageID", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelText", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "richText", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LanguageCore.prototype;
        _proto.start = function start() {
          if (this.labelText == null) this.labelText = this.node.getComponent(Label);
          if (this.richText == null) this.richText = this.node.getComponent(RichText);
          var str = LanguageCore.getLang(this.LanguageID);
          if (this.labelText != null) this.labelText.string = str;
          if (this.richText != null) {
            this.richText.string = str;
          }
        }

        //静态区域
        // 静态缓存字段 - 存储所有语言数据
        ;
        /**
         * 加载语言表并缓存
         */
        LanguageCore.loadLanguage = /*#__PURE__*/
        function () {
          var _loadLanguage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(lang) {
            var _this2 = this;
            var loadPromise;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this.loadingPromises.has(lang)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return", this.loadingPromises.get(lang));
                case 2:
                  if (!this.languageCache.has(lang)) {
                    _context2.next = 6;
                    break;
                  }
                  console.log("\u8BED\u8A00 " + lang + " \u5DF2\u7F13\u5B58\uFF0C\u76F4\u63A5\u4F7F\u7528");
                  this.currentLanguage = lang;
                  return _context2.abrupt("return", true);
                case 6:
                  // 创建加载Promise
                  loadPromise = new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
                    var resource;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          console.log("\u5F00\u59CB\u52A0\u8F7D\u8BED\u8A00: " + lang);

                          // 加载语言文件
                          _context.next = 4;
                          return new Promise(function (res, rej) {
                            resources.load("i18n/" + lang, function (err, asset) {
                              if (err) {
                                rej(err);
                                return;
                              }
                              res(asset);
                            });
                          });
                        case 4:
                          resource = _context.sent;
                          // 缓存语言数据
                          _this2.languageCache.set(lang, resource.json);
                          _this2.currentLanguage = lang;
                          console.log("\u8BED\u8A00 " + lang + " \u52A0\u8F7D\u5E76\u7F13\u5B58\u6210\u529F");
                          resolve(true);
                          _context.next = 15;
                          break;
                        case 11:
                          _context.prev = 11;
                          _context.t0 = _context["catch"](0);
                          console.error("\u52A0\u8F7D\u8BED\u8A00 " + lang + " \u5931\u8D25:", _context.t0);
                          reject(_context.t0);
                        case 15:
                          _context.prev = 15;
                          // 移除加载中的Promise
                          _this2.loadingPromises["delete"](lang);
                          return _context.finish(15);
                        case 18:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee, null, [[0, 11, 15, 18]]);
                  }))); // 保存加载Promise
                  this.loadingPromises.set(lang, loadPromise);
                  return _context2.abrupt("return", loadPromise);
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function loadLanguage(_x) {
            return _loadLanguage.apply(this, arguments);
          }
          return loadLanguage;
        }()
        /**
         * 获取本地化文本
         */;

        LanguageCore.getLang = function getLang(key, lang) {
          var targetLang = lang || this.currentLanguage;
          var languageData = this.languageCache.get(targetLang);
          if (!languageData) {
            console.warn("\u8BED\u8A00 " + targetLang + " \u672A\u52A0\u8F7D");
            return "[" + key + "]";
          }
          var value = languageData[key];
          if (value === undefined) {
            console.warn("\u672A\u627E\u5230\u952E\u503C: " + key + " \u5728\u8BED\u8A00 " + targetLang + " \u4E2D");
            return "[" + key + "]";
          }
          return value;
        }

        /**
         * 预加载多个语言
         */;
        LanguageCore.preloadLanguages = /*#__PURE__*/
        function () {
          var _preloadLanguages = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(languages) {
            var _this3 = this;
            var loadPromises;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  loadPromises = languages.map(function (lang) {
                    return _this3.loadLanguage(lang);
                  });
                  _context3.next = 3;
                  return Promise.all(loadPromises);
                case 3:
                  console.log('所有语言预加载完成');
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function preloadLanguages(_x4) {
            return _preloadLanguages.apply(this, arguments);
          }
          return preloadLanguages;
        }()
        /**
         * 获取当前语言
         */;

        LanguageCore.getCurrentLanguage = function getCurrentLanguage() {
          return this.currentLanguage;
        }

        /**
         * 设置当前语言
         */;
        LanguageCore.setCurrentLanguage = function setCurrentLanguage(lang) {
          if (this.languageCache.has(lang)) {
            this.currentLanguage = lang;
            console.log("\u5F53\u524D\u8BED\u8A00\u5DF2\u5207\u6362\u4E3A: " + lang);
          } else {
            console.warn("\u8BED\u8A00 " + lang + " \u672A\u52A0\u8F7D\uFF0C\u65E0\u6CD5\u5207\u6362");
          }
        }

        /**
         * 检查语言是否已加载
         */;
        LanguageCore.isLanguageLoaded = function isLanguageLoaded(lang) {
          return this.languageCache.has(lang);
        }

        /**
         * 获取所有已加载的语言
         */;
        LanguageCore.getLoadedLanguages = function getLoadedLanguages() {
          return Array.from(this.languageCache.keys());
        }

        /**
         * 清空语言缓存
         */;
        LanguageCore.clearCache = function clearCache() {
          this.languageCache.clear();
          console.log('语言缓存已清空');
        };
        return LanguageCore;
      }(Component), _class3.languageCache = new Map(), _class3.currentLanguage = 'zh', _class3.loadingPromises = new Map(), _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "LanguageID", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "0";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "richText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LanguageSpCore.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3fb93txFuZJRbN8Gea4CWiT", "LanguageSpCore", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LanguageSpCore = exports('LanguageSpCore', (_dec = ccclass('LanguageSpCore'), _dec2 = property({
        type: Sprite
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LanguageSpCore, _Component);
        function LanguageSpCore() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "LanguageID", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelText", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LanguageSpCore.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return LanguageSpCore;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "LanguageID", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "0";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LobbyPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './InfiniteScrollView.ts', './UIManager.ts', './UIDefine.ts', './TopBarMain.ts', './SignalRManager.ts', './GameMain.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Button, Component, InfiniteScrollView, UIManager, UIDefine, TopBarMain, SignalRManager, GameMain;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      InfiniteScrollView = module.InfiniteScrollView;
    }, function (module) {
      UIManager = module.UIManager;
    }, function (module) {
      UIDefine = module.UIDefine;
    }, function (module) {
      TopBarMain = module.TopBarMain;
    }, function (module) {
      SignalRManager = module.SignalRManager;
    }, function (module) {
      GameMain = module.GameMain;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "2b8e1LNXqFKo5Jy12xIN6SB", "LobbyPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LobbyPanel = exports('LobbyPanel', (_dec = ccclass('LobbyPanel'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Button
      }), _dec4 = property({
        type: Button
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: InfiniteScrollView
      }), _dec7 = property({
        type: Button
      }), _dec8 = property({
        type: Button
      }), _dec9 = property({
        type: TopBarMain
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LobbyPanel, _Component);
        function LobbyPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "BaseContent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "quickJoinBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeRoom", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topbar", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infiniteScrollView", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "creatRoomBtn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "searchRoomBtn", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topBarMain", _descriptor8, _assertThisInitialized(_this));
          _this.timer = 20;
          return _this;
        }
        var _proto = LobbyPanel.prototype;
        _proto.start = function start() {
          var _GameMain$instance$Ac;
          ///this.infiniteScrollView.initializeData(createTestRoomData());
          this.infiniteScrollView.node.active = false;
          var coins = (_GameMain$instance$Ac = GameMain.instance.AccountData) == null ? void 0 : _GameMain$instance$Ac.gold;
          this.topBarMain.setCoinsCount(coins);
          this.switchRoom(false);
        };
        _proto.switchRoom = function switchRoom(openRoomList) {
          this.BaseContent.active = !openRoomList;
          this.infiniteScrollView.node.active = openRoomList;
        };
        _proto.update = function update(deltaTime) {
          this.timer += deltaTime;
          if (this.timer >= 15) {
            this.UpdateRoomList();
            this.timer = 0;
          }
        };
        _proto.UpdateRoomList = function UpdateRoomList() {
          this.refreshRoomList();
        };
        _proto.onLoad = function onLoad() {
          this.initButtonEvents();
        }

        /**
         * 初始化所有按钮点击事件
         */;
        _proto.initButtonEvents = function initButtonEvents() {
          // 快速加入按钮
          if (this.quickJoinBtn) {
            this.quickJoinBtn.node.on(Button.EventType.CLICK, this.onQuickJoinClick, this);
          }

          // 免费房间按钮
          if (this.freeRoom) {
            this.freeRoom.node.on(Button.EventType.CLICK, this.onFreeRoomClick, this);
          }

          // 创建房间按钮
          if (this.creatRoomBtn) {
            this.creatRoomBtn.node.on(Button.EventType.CLICK, this.onCreateRoomClick, this);
          }

          // 搜索房间按钮
          if (this.searchRoomBtn) {
            this.searchRoomBtn.node.on(Button.EventType.CLICK, this.onSearchRoomClick, this);
          }
          this.topBarMain.backBtn.node.on(Button.EventType.CLICK, this.CloseRoomList, this);
        }

        /**
         * 快速加入按钮点击事件
         */;
        _proto.onQuickJoinClick = /*#__PURE__*/
        function () {
          var _onQuickJoinClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onQuickJoinClick() {
            return _onQuickJoinClick.apply(this, arguments);
          }
          return onQuickJoinClick;
        }()
        /**
         * 免费房间按钮点击事件
         */;

        _proto.onFreeRoomClick = /*#__PURE__*/
        function () {
          var _onFreeRoomClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.switchRoom(true);

                // if (this.isLoading) return;

                // console.log('免费房间按钮被点击');
                // this.setLoadingState(true);

                // try {
                //     // 筛选并显示免费房间
                //     await this.filterFreeRooms();
                //     this.showToast('已筛选免费房间');
                // } catch (error) {
                //     console.error('筛选免费房间失败:', error);
                //     this.showToast('筛选失败');
                // } finally {
                //     this.setLoadingState(false);
                // }
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onFreeRoomClick() {
            return _onFreeRoomClick.apply(this, arguments);
          }
          return onFreeRoomClick;
        }();
        _proto.CloseRoomList = function CloseRoomList() {
          this.switchRoom(false);
        }

        /**
         * 创建房间按钮点击事件
         */;
        _proto.onCreateRoomClick = /*#__PURE__*/
        function () {
          var _onCreateRoomClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  console.log('创建房间按钮被点击');
                  UIManager.I.open(UIDefine.CreatRoomView);
                case 2:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function onCreateRoomClick() {
            return _onCreateRoomClick.apply(this, arguments);
          }
          return onCreateRoomClick;
        }()
        /**
         * 搜索房间按钮点击事件
         */;

        _proto.onSearchRoomClick = /*#__PURE__*/
        function () {
          var _onSearchRoomClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  console.log('搜索房间按钮被点击');
                  UIManager.I.open(UIDefine.SerchContentView);
                case 2:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function onSearchRoomClick() {
            return _onSearchRoomClick.apply(this, arguments);
          }
          return onSearchRoomClick;
        }()
        /**
         * 加入房间
         */;

        _proto.joinRoom = /*#__PURE__*/
        function () {
          var _joinRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(roomId) {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  console.log("\u52A0\u5165\u623F\u95F4: " + roomId);

                // try {
                //     // 调用 SignalR 或其他网络服务加入房间
                //     // const result = await SignalRManager.enterRoom(roomId);
                //     // if (result) {
                //     //     this.showToast('加入成功');
                //     //     this.enterGameScene();
                //     // } else {
                //     //     this.showToast('加入失败');
                //     // }

                //     this.showToast(`加入房间 ${roomId}`);
                // } catch (error) {
                //     console.error('加入房间错误:', error);
                //     throw error;
                // }
                case 1:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          function joinRoom(_x) {
            return _joinRoom.apply(this, arguments);
          }
          return joinRoom;
        }()
        /**
         * 筛选免费房间
         */
        /**
         * 打开搜索房间面板
         */;

        _proto.openSearchRoomPanel = /*#__PURE__*/
        function () {
          var _openSearchRoomPanel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  console.log('打开搜索房间面板');

                // 这里实现打开搜索面板的逻辑
                // 例如：UIManager.I.open('prefabs/SearchRoomPanel');
                case 1:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          }));
          function openSearchRoomPanel() {
            return _openSearchRoomPanel.apply(this, arguments);
          }
          return openSearchRoomPanel;
        }()
        /**
         * 进入游戏场景
         */;

        _proto.enterGameScene = function enterGameScene() {
          console.log('进入游戏场景');
          // 实现场景切换逻辑
        }

        /**
         * 组件销毁时清理事件监听
         */;
        _proto.onDestroy = function onDestroy() {
          this.removeButtonEvents();
        }

        /**
         * 移除按钮事件监听
         */;
        _proto.removeButtonEvents = function removeButtonEvents() {
          if (this.quickJoinBtn) {
            this.quickJoinBtn.node.off(Button.EventType.CLICK, this.onQuickJoinClick, this);
          }
          if (this.freeRoom) {
            this.freeRoom.node.off(Button.EventType.CLICK, this.onFreeRoomClick, this);
          }
          if (this.creatRoomBtn) {
            this.creatRoomBtn.node.off(Button.EventType.CLICK, this.onCreateRoomClick, this);
          }
          if (this.searchRoomBtn) {
            this.searchRoomBtn.node.off(Button.EventType.CLICK, this.onSearchRoomClick, this);
          }
        }

        /**
         * 刷新房间列表
         */;
        _proto.refreshRoomList = /*#__PURE__*/
        function () {
          var _refreshRoomList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var roomData;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  console.log('刷新房间列表');

                  // 这里实现刷新逻辑
                  if (!this.infiniteScrollView) {
                    _context7.next = 8;
                    break;
                  }
                  _context7.next = 5;
                  return SignalRManager.getRooms();
                case 5:
                  roomData = _context7.sent;
                  console.log('返回房间列表 ' + roomData.length);
                  this.infiniteScrollView.initializeData(roomData);
                case 8:
                  _context7.next = 13;
                  break;
                case 10:
                  _context7.prev = 10;
                  _context7.t0 = _context7["catch"](0);
                  console.error('刷新房间列表失败:', _context7.t0);
                case 13:
                  _context7.prev = 13;
                  return _context7.finish(13);
                case 15:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this, [[0, 10, 13, 15]]);
          }));
          function refreshRoomList() {
            return _refreshRoomList.apply(this, arguments);
          }
          return refreshRoomList;
        }();
        return LobbyPanel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BaseContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "quickJoinBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "freeRoom", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "topbar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "infiniteScrollView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "creatRoomBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "searchRoomBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "topBarMain", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      // 初始化数据
      // const roomData: RoomInfo[] = [/* 你的房间数据 */];
      // this.infiniteScrollView.initializeData(roomData);

      // // 更新单个item
      // this.infiniteScrollView.updateItem(0, updatedRoomInfo);

      // // 添加新数据
      // this.infiniteScrollView.addData(newRoomInfo);

      // // 滚动到指定位置
      // this.infiniteScrollView.scrollTo(5);

      // // 监听item点击事件
      // this.infiniteScrollView.node.on('room-item-click', (index: number, roomInfo: RoomInfo) => {
      //     console.log('Item clicked:', index, roomInfo);
      //});

      // 创建20个测试房间数据
      var createTestRoomData = exports('createTestRoomData', function createTestRoomData() {
        var roomNames = ["欢乐斗地主", "经典麻将房", "德州扑克高手", "跑得快俱乐部", "炸金花乐园", "斗牛竞技场", "十三水大师", "二八杠专场", "拼十王者", "二十一点赌场", "幸运轮盘", "百家乐VIP", "骰宝娱乐", "龙虎斗战场", "番摊挑战", "牌九传统", "牛牛狂欢", "三公对决", "十点半休闲", "升级比赛"];
        var testData = [];
        for (var i = 0; i < 20; i++) {
          var roomId = "ROOM" + (1000 + i).toString();
          var hasName = Math.random() > 0.2; // 80%的概率有名字
          var needPassword = Math.random() > 0.7; // 30%的概率需要密码
          var isChallenge = Math.random() > 0.5; // 50%的概率是挑战赛

          testData.push({
            id: roomId,
            name: hasName ? roomNames[i] : undefined,
            bet: Math.floor(Math.random() * 1000) + 100,
            // 100-1099的赌注
            playerCount: Math.floor(Math.random() * 6) + 1,
            // 1-6个玩家
            needPassword: needPassword,
            isChallenge: isChallenge
          });
        }
        return testData;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIBase.ts', './HttpHelper.ts', './TipPanel.ts', './LanguageCore.ts', './SignalRManager.ts', './UIManager.ts', './UIDefine.ts', './GameMain.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, EditBox, Toggle, Button, Node, instantiate, UIBase, HttpHelper, TipPanel, LanguageCore, SignalRManager, UIManager, UIDefine, GameMain;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      EditBox = module.EditBox;
      Toggle = module.Toggle;
      Button = module.Button;
      Node = module.Node;
      instantiate = module.instantiate;
    }, function (module) {
      UIBase = module.UIBase;
    }, function (module) {
      HttpHelper = module.HttpHelper;
    }, function (module) {
      TipPanel = module.TipPanel;
    }, function (module) {
      LanguageCore = module.LanguageCore;
    }, function (module) {
      SignalRManager = module.SignalRManager;
    }, function (module) {
      UIManager = module.UIManager;
    }, function (module) {
      UIDefine = module.UIDefine;
    }, function (module) {
      GameMain = module.GameMain;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "3d3c2XouRRLZpmC3f6EvmlH", "LoginPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LoginPanel = exports('LoginPanel', (_dec = ccclass('LoginPanel'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: EditBox
      }), _dec4 = property({
        type: EditBox
      }), _dec5 = property({
        type: Toggle
      }), _dec6 = property({
        type: Button
      }), _dec7 = property({
        type: Button
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Button
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_UIBase) {
        _inheritsLoose(LoginPanel, _UIBase);
        function LoginPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIBase.call.apply(_UIBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "currencyLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "accountInput", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "passwordInput", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleRemeber", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fotPaword", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openSelectCurrcyBtn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selectCurrcy", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonParent", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currencyButtonItem", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loginBtn", _descriptor10, _assertThisInitialized(_this));
          _this.loginC2S = {
            Account: '',
            Password: '',
            Email: '',
            Currency: ''
          };
          _this.currencyButtonItems = [];
          return _this;
        }
        var _proto = LoginPanel.prototype;
        _proto.onLoad = function onLoad() {
          this.initUI();
          this.loadCurrencyData();
        };
        _proto.initUI = function initUI() {
          if (this.selectCurrcy) this.selectCurrcy.active = false;
          if (this.currencyButtonItem) this.currencyButtonItem.active = false;

          // 初始化输入框数据
          if (this.accountInput) {
            this.accountInput.node.on('editing-did-ended', this.onAccountInputFieldEndEdit, this);
            this.accountInput.string = GameMain.instance.savedPlayerData.account;
            this.loginC2S.Account = GameMain.instance.savedPlayerData.account;
          }
          if (this.passwordInput) {
            this.passwordInput.node.on('editing-did-ended', this.onPasswordInputFieldEndEdit, this);
            this.passwordInput.string = GameMain.instance.savedPlayerData.password;
            this.loginC2S.Password = GameMain.instance.savedPlayerData.password;
          }
          if (this.toggleRemeber) {
            this.toggleRemeber.isChecked = GameMain.instance.savedPlayerData.remenberMe;
            this.toggleRemeber.node.on('toggle', this.onRememberValueChanged, this);
          }
          if (this.fotPaword) {
            this.fotPaword.node.on('click', this.onForgetPasswordClick, this);
          }
          this.loginBtn.node.on('click', this.onLoginBtnClick, this);

          // 货币选择按钮
          if (this.openSelectCurrcyBtn) {
            this.openSelectCurrcyBtn.node.on('click', this.onCurrencyButtonClick, this);
          }
        };
        _proto.loadCurrencyData = function loadCurrencyData() {
          var _this2 = this;
          HttpHelper.getCurrency(function (c) {
            if (c && c.length > 0) {
              HttpHelper.CurrencyList = c;
              if (!GameMain.instance.savedPlayerData.lastCurrency) {
                GameMain.instance.savedPlayerData.lastCurrency = c[0];
                GameMain.instance.doSavedPlayerData();
              }
              _this2.updateCurrencyDisplay();
            }
          });
        };
        _proto.onRememberValueChanged = function onRememberValueChanged(toggle) {
          GameMain.instance.savedPlayerData.remenberMe = toggle.isChecked;
          GameMain.instance.doSavedPlayerData();
        };
        _proto.onAccountInputFieldEndEdit = function onAccountInputFieldEndEdit(editBox) {
          this.loginC2S.Account = editBox.string;
        };
        _proto.onForgetPasswordClick = function onForgetPasswordClick() {
          if (!this.loginC2S.Account) {
            TipPanel.showTips("Please enter your account.");
            return;
          }
          HttpHelper.resetPassword(this.loginC2S.Account);
          TipPanel.showTips(LanguageCore.getLang('119'));
        };
        _proto.onPasswordInputFieldEndEdit = function onPasswordInputFieldEndEdit(editBox) {
          this.loginC2S.Password = editBox.string;
        };
        _proto.onLoginBtnClick = function onLoginBtnClick() {
          var _this3 = this;
          if (!this.loginC2S.Account || !this.loginC2S.Password) {
            TipPanel.showTips("Your account number or password is not entered.");
            return;
          }
          this.loginC2S.Email = this.loginC2S.Account;
          this.loginC2S.Currency = GameMain.instance.savedPlayerData.lastCurrency;
          console.log("Login data " + this.loginC2S);
          HttpHelper.doLogin(this.loginC2S, function (token, code) {
            if (!token) {
              TipPanel.showTips("Login in Failed " + code);
            } else {
              GameMain.instance.savedPlayerData.account = _this3.loginC2S.Account;
              GameMain.instance.savedPlayerData.password = _this3.loginC2S.Password;
              GameMain.instance.doSavedPlayerData();
              TipPanel.showTips("Login in success " + code);
              // 登录成功
              HttpHelper.getAccount(function (accountInfo) {
                if (accountInfo) {
                  GameMain.instance.accountFullInfo = accountInfo;
                  _this3.LoginMainPaga();
                } else {
                  TipPanel.showTips("Login in Failed");
                }
              });
            }
          });
        };
        _proto.LoginMainPaga = /*#__PURE__*/function () {
          var _LoginMainPaga = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return SignalRManager.initialize();
                case 2:
                  result = _context.sent;
                  if (result) {
                    UIManager.I.open(UIDefine.LobbyPanel);
                    UIManager.I.close(UIDefine.LoginPanel);
                  }
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function LoginMainPaga() {
            return _LoginMainPaga.apply(this, arguments);
          }
          return LoginMainPaga;
        }();
        _proto.onCurrencyButtonClick = function onCurrencyButtonClick() {
          this.showCurrencySelection();
        };
        _proto.updateCurrencyDisplay = function updateCurrencyDisplay() {
          if (this.currencyLabel) {
            this.currencyLabel.string = GameMain.instance.savedPlayerData.lastCurrency;
          }
        };
        _proto.showCurrencySelection = function showCurrencySelection() {
          var _this4 = this;
          if (!this.selectCurrcy || !this.currencyButtonItem) return;

          // 隐藏所有货币按钮
          this.currencyButtonItems.forEach(function (item) {
            return item.active = false;
          });

          // 创建或显示货币按钮
          var currencyList = HttpHelper.CurrencyList;
          var _loop = function _loop(i) {
            var currencyItem = _this4.getCurrencyButtonItem(i);
            var currencyText = currencyItem.getComponentInChildren(Label);
            if (currencyText) {
              currencyText.string = currencyList[i];
            }

            // 高亮当前选择的货币
            var lightNode = currencyItem.getChildByName("Light");
            if (lightNode) {
              lightNode.active = currencyList[i] === GameMain.instance.savedPlayerData.lastCurrency;
            }

            // 设置点击事件
            var button = currencyItem.getComponent(Button);
            if (button) {
              button.node.off('click');
              button.node.on('click', function () {
                _this4.selectCurrency(currencyList[i]);
              });
            }
            currencyItem.active = true;
          };
          for (var i = 0; i < currencyList.length; i++) {
            _loop(i);
          }
          this.selectCurrcy.active = true;
        };
        _proto.getCurrencyButtonItem = function getCurrencyButtonItem(index) {
          if (index < this.currencyButtonItems.length) {
            return this.currencyButtonItems[index];
          }
          if (!this.currencyButtonItem) return new Node();
          var newItem = instantiate(this.currencyButtonItem);
          if (this.buttonParent) {
            this.buttonParent.addChild(newItem);
          }
          this.currencyButtonItems.push(newItem);
          return newItem;
        };
        _proto.selectCurrency = function selectCurrency(currency) {
          GameMain.instance.savedPlayerData.lastCurrency = currency;
          this.updateCurrencyDisplay();
          this.closeCurrencySelection();
          GameMain.instance.doSavedPlayerData();
        };
        _proto.closeCurrencySelection = function closeCurrencySelection() {
          if (this.selectCurrcy) {
            this.selectCurrcy.active = false;
          }
        }

        // 清理资源
        ;

        _proto.onDestroy = function onDestroy() {
          if (this.accountInput) {
            this.accountInput.node.off('editing-did-ended', this.onAccountInputFieldEndEdit, this);
          }
          if (this.passwordInput) {
            this.passwordInput.node.off('editing-did-ended', this.onPasswordInputFieldEndEdit, this);
          }
          if (this.toggleRemeber) {
            this.toggleRemeber.node.off('toggle', this.onRememberValueChanged, this);
          }
          if (this.fotPaword) {
            this.fotPaword.node.off('click', this.onForgetPasswordClick, this);
          }
          if (this.selectCurrcy) {
            this.selectCurrcy.off('click', this.onCurrencyButtonClick, this);
          }
          this.loginBtn.node.off('click', this.onLoginBtnClick, this);
        };
        return LoginPanel;
      }(UIBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currencyLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "accountInput", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "passwordInput", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toggleRemeber", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fotPaword", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "openSelectCurrcyBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "selectCurrcy", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "buttonParent", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "currencyButtonItem", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "loginBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./ChatController.ts', './GameMain.ts', './HttpHelper.ts', './NetMsg.ts', './NetPort.ts', './SignalRManager.ts', './AssetsLoader.ts', './JsonHelper.ts', './LanguageCore.ts', './LanguageSpCore.ts', './StorageUtil.ts', './UIBase.ts', './UIDefine.ts', './UIManager.ts', './CreatRoomView.ts', './InfiniteScrollView.ts', './LobbyPanel.ts', './LoginPanel.ts', './RoomItem.ts', './RoomListManager.ts', './SerchContentView.ts', './TipPanel.ts', './TopBarMain.ts', './debug-view-runtime-control.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/NetMsg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "4c198KBoT5F5Znrm+1ROevh", "NetMsg", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NetMsg = exports('NetMsg', (_dec = ccclass('NetMsg'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NetMsg, _Component);
        function NetMsg() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = NetMsg.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return NetMsg;
      }(Component)) || _class));

      // models.ts

      // ---------------- API 结果 ----------------
      var ApiClientResult = exports('ApiClientResult', /*#__PURE__*/function () {
        function ApiClientResult(errorCode, data) {
          this.errorCode = void 0;
          this.data = void 0;
          this.errorCode = errorCode;
          this.data = data;
        }
        _createClass(ApiClientResult, [{
          key: "isSuccessful",
          get: function get() {
            return this.errorCode === 0;
          }
        }]);
        return ApiClientResult;
      }());
      var ApiClientResultVoid = exports('ApiClientResultVoid', /*#__PURE__*/function (_ApiClientResult) {
        _inheritsLoose(ApiClientResultVoid, _ApiClientResult);
        function ApiClientResultVoid(errorCode) {
          return _ApiClientResult.call(this, errorCode, null) || this;
        }
        return ApiClientResultVoid;
      }(ApiClientResult));

      // ---------------- 登录相关 ----------------

      // ---------------- 账号信息 ----------------

      // ---------------- 房间状态 ----------------

      var GameStage = exports('GameStage', /*#__PURE__*/function (GameStage) {
        GameStage[GameStage["Bet"] = 0] = "Bet";
        GameStage[GameStage["Countdown"] = 1] = "Countdown";
        GameStage[GameStage["Computing"] = 2] = "Computing";
        GameStage[GameStage["Settlement"] = 3] = "Settlement";
        return GameStage;
      }({}));

      // ---------------- 房间列表 ----------------
      /** 获取房间列表 GetRooms [INVOKE] */ // ---------------- 创建房间 ----------------
      /** 创建房间 CreateRoom [INVOKE] */
      // ---------------- 玩家信息 ----------------
      /** 进入房间 EnterRoom [ON] */
      // ---------------- 结算数据 ----------------
      /** 已结算 OnSettled [ON] */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetPort.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _inheritsLoose, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ba761UK+8tNio2887OK7b7h", "NetPort", undefined);
      // NetPort.ts - 网络配置
      var NetPort = exports('NetPort', function NetPort() {});

      // 基础接口
      NetPort.httpApi = "https://dice-api.hudada.online/";
      // 替换为您的实际 API 地址
      NetPort.signalRApi = "https://dice-api.hudada.online/";
      NetPort.PostRegister = "account/register?email={0}";
      //注册 Register[POST]	1
      NetPort.PostResetPassword = "account/resetpassword?email={0}";
      //重置密码 ResetPassword[POST]	1
      NetPort.PostLogin = "account/login";
      //登录 Login[POST]	2
      NetPort.PostLogout = "account/loginout";
      //注销 Logout[POST]	2
      NetPort.GetAccount = "account/info";
      //获取账户信息 GetAccount[GET 
      NetPort.GetCurrencys = "configuration/currencys";
      //支持的货币 Currencys [GET]
      //signalR的
      NetPort.GetRooms = "GetRooms";
      //获取房间列表 GetRooms[INVOKE]
      NetPort.CreateRoom = "CreateRoom";
      //创建房间 CreateRoom[INVOKE]
      NetPort.EnterRoom = "EnterRoom";
      //进入房间 EnterRoom[INVOKE]
      NetPort.ExitRoom = "ExitRoom";
      //退出房间 ExitRoom[INVOKE]	
      NetPort.ChosePoint = "ChosePoint";
      //选择点数 ChosePoint[INVOKE]
      NetPort.OnCountdown = "OnCountdown";
      //倒计时开始 OnCountdown[ON]
      NetPort.OnComputing = "OnComputing";
      //开始计算结果 OnComputing[ON]
      NetPort.OnBet = "OnBet";
      //玩家下注 OnComputing[ON]
      NetPort.OnSettled = "OnSettled";
      //已结算 OnSettled[ON]
      NetPort.OnError = "OnError";
      //发生错误 OnError[ON]
      NetPort.GetGold = "GetGold"; // HTTP 响应结构
      // 泛型 API 客户端响应
      var ApiClientResult = exports('ApiClientResult', /*#__PURE__*/function () {
        function ApiClientResult(errorCode, data) {
          this.errorCode = void 0;
          this.data = void 0;
          this.errorCode = errorCode;
          this.data = data;
        }
        _createClass(ApiClientResult, [{
          key: "isSuccessful",
          get: function get() {
            return this.errorCode === 0;
          }
        }]);
        return ApiClientResult;
      }());

      // 非泛型 API 客户端响应
      var ApiClientResultSimple = exports('ApiClientResultSimple', /*#__PURE__*/function (_ApiClientResult) {
        _inheritsLoose(ApiClientResultSimple, _ApiClientResult);
        function ApiClientResultSimple(errorCode) {
          return _ApiClientResult.call(this, errorCode, null) || this;
        }
        return ApiClientResultSimple;
      }(ApiClientResult));
      // 登录请求

      // 账户完整信息响应

      // 账户基本信息

      // 账户数据

      // 房间状态信息

      // 游戏阶段枚举
      var GameStage = exports('GameStage', /*#__PURE__*/function (GameStage) {
        GameStage["bet"] = "Bet";
        GameStage["countdown"] = "Countdown";
        GameStage["computing"] = "Computing";
        GameStage["settlement"] = "Settlement";
        return GameStage;
      }({}));

      // 房间信息

      // 玩家创建房间信息

      // 玩家信息

      // 结算数据

      // 辅助函数和工具类
      var ApiUtils = exports('ApiUtils', /*#__PURE__*/function () {
        function ApiUtils() {}
        // 创建成功的响应
        ApiUtils.createSuccessResult = function createSuccessResult(data) {
          return new ApiClientResult(0, data);
        }

        // 创建错误响应
        ;

        ApiUtils.createErrorResult = function createErrorResult(errorCode, data) {
          return new ApiClientResult(errorCode, data);
        }

        // 创建简单错误响应
        ;

        ApiUtils.createSimpleErrorResult = function createSimpleErrorResult(errorCode) {
          return new ApiClientResultSimple(errorCode);
        };
        return ApiUtils;
      }());

      // 验证工具类
      var ValidationUtils = exports('ValidationUtils', /*#__PURE__*/function () {
        function ValidationUtils() {}
        ValidationUtils.isPlayerCreateRoomInfoValid = function isPlayerCreateRoomInfoValid(info) {
          return info.bet >= 10;
        };
        return ValidationUtils;
      }());

      // 使用示例
      /*
      // 创建登录请求
      const loginRequest: LoginInfo = {
          account: "testuser",
          email: "test@example.com",
          password: "password123",
          currency: "USD"
      };
        // 创建 API 响应
      const accountResponse: ApiClientResult<AccountFullInfo> = ApiUtils.createSuccessResult({
          account: {
              id: 1,
              email: "test@example.com",
              nickName: "TestUser",
              portrait: 1,
              isEnable: true,
              agentCode: "Test0",
              isAgentEnable: true
          },
          accountData: {
              id: 0,
              accountId: 1,
              currency: "USD",
              gold: 1000,
              pendingGold: 0,
              freezedGold: 0,
              winCount: 10,
              lossCount: 5,
              combo: 3,
              maxCombo: 5,
              totalCount: 15,
              winRate: 67,
              withdrawRequestId: null
          }
      });
        // 创建房间信息
      const roomInfo: RoomInfo = {
          id: "room-123",
          name: "VIP Room",
          bet: 100,
          playerCount: 4,
          needPassword: true,
          isChallenge: false
      };
        // 创建结算数据（使用 Map）
      const settlementData: SettlementData = {
          matchId: "match-456",
          point: 21,
          win: 500,
          winPlayerEmails: ["player1@example.com", "player2@example.com"],
          playersPoints: new Map([
              ["player1@example.com", 21],
              ["player2@example.com", 18],
              ["player3@example.com", 15]
          ])
      };
        // 或者使用对象字面量
      const settlementDataAlt: SettlementData = {
          matchId: "match-456",
          point: 21,
          win: 500,
          winPlayerEmails: ["player1@example.com", "player2@example.com"],
          playersPoints: new Map(Object.entries({
              "player1@example.com": 21,
              "player2@example.com": 18,
              "player3@example.com": 15
          }))
      };
      */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoomItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "1de6c/Y5RNEd76aXUC28lDn", "RoomItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RoomItem = exports('RoomItem', (_dec = ccclass('RoomItem'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Label
      }), _dec7 = property({
        type: Label
      }), _dec8 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoomItem, _Component);
        function RoomItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lightHint", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roomName", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roomID", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betInfo", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betAmount", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roleNum", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lockObj", _descriptor7, _assertThisInitialized(_this));
          _this._roomInfo = null;
          _this._itemIndex = -1;
          return _this;
        }
        var _proto = RoomItem.prototype;
        // 获取item索引
        _proto.getItemIndex = function getItemIndex() {
          return this._itemIndex;
        }

        // 更新房间信息
        ;

        _proto.updateItem = function updateItem(index, roomInfo) {
          this._itemIndex = index;
          this._roomInfo = roomInfo;
          // 更新UI显示
          if (this.roomName) {
            this.roomName.string = roomInfo.name || '';
          }
          if (this.roomID) {
            this.roomID.string = roomInfo.id ? roomInfo.id.toString() : '';
          }
          if (this.betInfo) {
            //this.betInfo.string = roomInfo.betInfo || '';
            //加载多语言
            this.betInfo.string = "押注:";
          }
          if (this.betAmount) {
            this.betAmount.string = roomInfo.bet ? roomInfo.bet.toString() : '';
          }
          if (this.roleNum) {
            this.roleNum.string = roomInfo.playerCount + "";
          }

          // 更新锁状态
          if (this.lockObj) {
            this.lockObj.active = roomInfo.needPassword || false;
          }

          // 更新高亮提示
          if (this.lightHint) ;
        }

        // 获取房间信息
        ;

        _proto.getRoomInfo = function getRoomInfo() {
          return this._roomInfo;
        }

        // 点击事件处理
        ;

        _proto.onItemClick = function onItemClick() {
          // 触发房间选择事件
          console.log('Room selected:', this._roomInfo);
          // 可以在这里派发自定义事件
          // this.node.emit('room-selected', this._roomInfo);
          if (this._roomInfo.needPassword) ;else {
            this.callJoinRoom();
          }
        };
        _proto.callJoinRoom = function callJoinRoom() {};
        _proto.start = function start() {
          // 添加点击事件
          this.node.on(Node.EventType.TOUCH_END, this.onItemClick, this);
        };
        _proto.onDestroy = function onDestroy() {
          // 移除事件监听
          this.node.off(Node.EventType.TOUCH_END, this.onItemClick, this);
        };
        return RoomItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lightHint", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roomName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "roomID", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "betInfo", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "betAmount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "roleNum", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lockObj", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoomListManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "02295kqjO5JFqG/LWDSow0c", "RoomListManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RoomListManager = exports('RoomListManager', (_dec = ccclass('RoomListManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RoomListManager, _Component);
        function RoomListManager() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = RoomListManager.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return RoomListManager;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SerchContentView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIBase.ts', './UIManager.ts', './UIDefine.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Button, UIBase, UIManager, UIDefine;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Button = module.Button;
    }, function (module) {
      UIBase = module.UIBase;
    }, function (module) {
      UIManager = module.UIManager;
    }, function (module) {
      UIDefine = module.UIDefine;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "6d688wt1DpM1onz/8PGGdIS", "SerchContentView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SerchContentView = exports('SerchContentView', (_dec = ccclass('SerchContentView'), _dec2 = property({
        type: EditBox
      }), _dec3 = property({
        type: Button
      }), _dec4 = property({
        type: Button
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_UIBase) {
        _inheritsLoose(SerchContentView, _UIBase);
        function SerchContentView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIBase.call.apply(_UIBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "iDInputField", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeUIBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enterBtn", _descriptor3, _assertThisInitialized(_this));
          // 搜索ID
          _this.searchBackInfo = 0;
          return _this;
        }
        var _proto = SerchContentView.prototype;
        _proto.onLoad = function onLoad() {
          this.initEvents();
        }

        // 初始化事件监听
        ;

        _proto.initEvents = function initEvents() {
          // ID输入框事件
          if (this.iDInputField) {
            this.iDInputField.node.on(EditBox.EventType.EDITING_DID_ENDED, this.onIDInputFieldEndEdit, this);
          }

          // 按钮点击事件
          if (this.enterBtn) {
            this.enterBtn.node.on(Button.EventType.CLICK, this.onEnterBtnClick, this);
          }
          if (this.closeUIBtn) {
            this.closeUIBtn.node.on(Button.EventType.CLICK, this.onCloseBtnClick, this);
          }
        }

        // 赌注输入框结束编辑
        ;

        _proto.onBetInputFieldEndEdit = function onBetInputFieldEndEdit(editBox) {
          var content = editBox.string;
          var result = parseInt(content);
          this.searchBackInfo = isNaN(result) ? 0 : result;
          console.log('Bet input:', this.searchBackInfo);
        }

        // ID输入框结束编辑
        ;

        _proto.onIDInputFieldEndEdit = function onIDInputFieldEndEdit(editBox) {
          var content = editBox.string;
          var result = parseInt(content);
          this.searchBackInfo = isNaN(result) ? 0 : result;
          console.log('ID input:', this.searchBackInfo);
        }

        // 进入按钮点击
        ;

        _proto.onEnterBtnClick = function onEnterBtnClick() {
          console.log('Enter button clicked, searchBackInfo:', this.searchBackInfo);

          // 调用搜索回调
          // LevelMapUI.instance.OnSearchBack(this.searchId, this.bet);

          // 关闭面板
          // UIManager.I.Close(UIDefine.SearchPanel);

          // 模拟调用

          this.closePanel();
        }

        // 关闭按钮点击
        ;

        _proto.onCloseBtnClick = function onCloseBtnClick() {
          console.log('Close button clicked');

          // 关闭面板
          UIManager.I.close(UIDefine.SearchPanel);
          this.closePanel();
        }

        // 关闭面板
        ;

        _proto.closePanel = function closePanel() {
          this.node.active = false;
          this.clearInputs();
        }

        // 清空输入
        ;

        _proto.clearInputs = function clearInputs() {
          if (this.iDInputField) {
            this.iDInputField.string = '';
          }
          // if (this.betInputField) {
          //     this.betInputField.string = '';
          // }
          // this.searchId = 0;
          // this.bet = 0;
        }

        // 显示面板（可选）
        ;

        _proto.showPanel = function showPanel() {
          this.node.active = true;
          this.clearInputs();
        }

        // 设置初始值（可选）
        ;

        _proto.setInitialValues = function setInitialValues(id, bet) {
          if (id !== undefined && this.iDInputField) {
            this.iDInputField.string = id.toString();
            this.searchBackInfo = id;
          }
          // if (bet !== undefined && this.betInputField) {
          //     this.betInputField.string = bet.toString();
          //     this.bet = bet;
          // }
        };

        _proto.onDestroy = function onDestroy() {
          this.removeEvents();
        }

        // 移除事件监听
        ;

        _proto.removeEvents = function removeEvents() {
          if (this.iDInputField) {
            this.iDInputField.node.off(EditBox.EventType.EDITING_DID_ENDED, this.onIDInputFieldEndEdit, this);
          }

          // if (this.betInputField) {
          //     this.betInputField.node.off(EditBox.EventType.EDITING_DID_ENDED, this.onBetInputFieldEndEdit, this);
          // }

          if (this.enterBtn) {
            this.enterBtn.node.off(Button.EventType.CLICK, this.onEnterBtnClick, this);
          }
          if (this.closeUIBtn) {
            this.closeUIBtn.node.off(Button.EventType.CLICK, this.onCloseBtnClick, this);
          }
        };
        return SerchContentView;
      }(UIBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iDInputField", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "closeUIBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enterBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SignalRManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './signalr.mjs_cjs=&original=.js', './HttpHelper.ts', './NetPort.ts', './JsonHelper.ts', './signalr.js'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, HttpHelper, NetPort, JsonHelper, _cjsExports;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      HttpHelper = module.HttpHelper;
    }, function (module) {
      NetPort = module.NetPort;
    }, function (module) {
      JsonHelper = module.JsonHelper;
    }, function (module) {
      _cjsExports = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a73a49OAA5LapraGv79JYdz", "SignalRManager", undefined);

      // 定义全局 SignalR 类型

      // 定义回调类型

      var SignalRManager = exports('SignalRManager', /*#__PURE__*/function () {
        function SignalRManager() {}
        /**
         * 初始化 SignalR 连接
         */
        SignalRManager.initialize = /*#__PURE__*/
        function () {
          var _initialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var token, serverUrl, builder;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.isInitialized) {
                    _context.next = 3;
                    break;
                  }
                  console.warn('SignalR 已经初始化');
                  return _context.abrupt("return", true);
                case 3:
                  _context.prev = 3;
                  token = HttpHelper.getAuthToken(); // const serverUrl = `${NetPort.signalRApi}dice${token ? `?access_token=${token}` : ''}`; 
                  serverUrl = NetPort.signalRApi + 'dice?access_token='; // + token;
                  console.log('正在连接 SignalR:', serverUrl);
                  builder = new _cjsExports.HubConnectionBuilder();
                  this.connection = builder.withUrl(serverUrl, {
                    skipNegotiation: false,
                    transport: _cjsExports.HttpTransportType.WebSockets,
                    accessTokenFactory: function accessTokenFactory() {
                      return token;
                    }
                  }).configureLogging(_cjsExports.LogLevel.Information).withAutomaticReconnect({
                    nextRetryDelayInMilliseconds: function nextRetryDelayInMilliseconds(retryContext) {
                      return Math.min(1000 * Math.pow(2, retryContext.previousRetryCount), 30000);
                    }
                  }).build();

                  // const builder = new signalR.HubConnectionBuilder();
                  // this.connection = builder.WithUrl(tileUrl).Build();

                  this.setupEventListeners();
                  console.log('SignalR setupEventListeners');
                  _context.next = 13;
                  return this.connection.start();
                case 13:
                  this.isInitialized = true;
                  this.reconnectAttempts = 0;
                  console.log('SignalR 连接成功，连接ID：', this.connection.connectionId);
                  return _context.abrupt("return", true);
                case 19:
                  _context.prev = 19;
                  _context.t0 = _context["catch"](3);
                  console.error('SignalR 初始化失败：', _context.t0);
                  _context.next = 24;
                  return this.handleReconnection();
                case 24:
                  return _context.abrupt("return", false);
                case 25:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[3, 19]]);
          }));
          function initialize() {
            return _initialize.apply(this, arguments);
          }
          return initialize;
        }();
        SignalRManager.setupEventListeners = function setupEventListeners() {
          var _this = this;
          if (!this.connection) return;
          this.connection.onclose(function (error) {
            console.log('SignalR 连接断开', error);
            _this.isInitialized = false;
            _this.handleReconnection();
          });
          this.connection.onreconnecting(function (error) {
            console.log('SignalR 正在重连...', error);
          });
          this.connection.onreconnected(function (connectionId) {
            console.log('SignalR 重连成功，新连接ID：', connectionId);
            _this.isInitialized = true;
            _this.reconnectAttempts = 0;
          });

          // 重新注册所有事件回调
          this.eventCallbacks.forEach(function (callbacks, methodName) {
            callbacks.forEach(function (callback) {
              _this.connection.on(methodName, callback);
            });
          });
        }

        /**
         * 注册服务器端方法回调
         */;
        SignalRManager.on = function on(methodName, callback) {
          if (!this.eventCallbacks.has(methodName)) {
            this.eventCallbacks.set(methodName, []);
          }
          this.eventCallbacks.get(methodName).push(callback);
          if (this.connection && this.isInitialized) {
            this.connection.on(methodName, callback);
          }
        }

        /**
         * 注册接收消息回调
         */;
        SignalRManager.onReceiveMessage = function onReceiveMessage(callback) {
          this.on("ReceiveMessage", callback);
        }

        /**
         * 注册位置更新回调
         */;
        SignalRManager.onPlayerPositionUpdated = function onPlayerPositionUpdated(callback) {
          this.on("PlayerPositionUpdated", callback);
        }

        /**
         * 向服务器发送消息
         */
        // public static async invoke(methodName: string, ...args: any[]): Promise<any> {
        //     if (!this.isConnected()) {
        //         throw new Error('SignalR connection not ready');
        //     }

        //     try {
        //         return await this.connection!.invoke(methodName, ...args);
        //     } catch (err) {
        //         console.error(`调用方法 ${methodName} 失败：`, err);
        //         throw err;
        //     }
        // }

        /**
         * 发送聊天消息
         */;
        SignalRManager.sendChatMessage = /*#__PURE__*/
        function () {
          var _sendChatMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(message) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.invoke("SendMessage", message);
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function sendChatMessage(_x) {
            return _sendChatMessage.apply(this, arguments);
          }
          return sendChatMessage;
        }()
        /**
         * 报告玩家位置
         */;

        SignalRManager.reportPosition = /*#__PURE__*/
        function () {
          var _reportPosition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(x, y) {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.invoke("ReportPosition", x, y);
                case 2:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function reportPosition(_x2, _x3) {
            return _reportPosition.apply(this, arguments);
          }
          return reportPosition;
        }()
        /**
         * 检查连接状态
         */;

        SignalRManager.isConnected = function isConnected() {
          return this.isInitialized && this.connection !== null && this.connection.state === _cjsExports.HubConnectionState.Connected;
        }

        /**
         * 获取连接状态
         */;
        SignalRManager.getConnectionState = function getConnectionState() {
          return this.connection ? this.connection.state : 'Disconnected';
        }

        /**
         * 获取连接ID
         */;
        SignalRManager.getConnectionId = function getConnectionId() {
          return this.connection ? this.connection.connectionId : null;
        }

        /**
         * 断开连接
         */;
        SignalRManager.disconnect = /*#__PURE__*/
        function () {
          var _disconnect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (!this.connection) {
                    _context4.next = 4;
                    break;
                  }
                  _context4.next = 3;
                  return this.connection.stop();
                case 3:
                  this.connection = null;
                case 4:
                  this.isInitialized = false;
                  this.eventCallbacks.clear();
                  console.log('SignalR 连接已断开');
                case 7:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function disconnect() {
            return _disconnect.apply(this, arguments);
          }
          return disconnect;
        }();
        SignalRManager.handleReconnection = /*#__PURE__*/function () {
          var _handleReconnection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var _this2 = this;
            var delay;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (!(this.reconnectAttempts >= this.maxReconnectAttempts)) {
                    _context6.next = 3;
                    break;
                  }
                  console.error('达到最大重连次数，停止重连');
                  return _context6.abrupt("return");
                case 3:
                  this.reconnectAttempts++;
                  delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000);
                  console.log("\u5C1D\u8BD5\u7B2C " + this.reconnectAttempts + " \u6B21\u91CD\u8FDE\uFF0C\u7B49\u5F85 " + delay + "ms...");
                  setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.prev = 0;
                          _context5.next = 3;
                          return _this2.initialize();
                        case 3:
                          _context5.next = 8;
                          break;
                        case 5:
                          _context5.prev = 5;
                          _context5.t0 = _context5["catch"](0);
                          console.error("\u7B2C " + _this2.reconnectAttempts + " \u6B21\u91CD\u8FDE\u5931\u8D25");
                        case 8:
                        case "end":
                          return _context5.stop();
                      }
                    }, _callee5, null, [[0, 5]]);
                  })), delay);
                case 7:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function handleReconnection() {
            return _handleReconnection.apply(this, arguments);
          }
          return handleReconnection;
        }()
        /**
             * 获取房间列表
             */
        /**
          * 获取房间列表
          */;

        SignalRManager.getRooms = /*#__PURE__*/
        function () {
          var _getRooms = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var result;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  console.log("--start GetRooms connection:", this.connection === null);
                  if (this.isConnected()) {
                    _context7.next = 4;
                    break;
                  }
                  _context7.next = 4;
                  return this.initialize();
                case 4:
                  _context7.prev = 4;
                  _context7.next = 7;
                  return this.invoke(NetPort.GetRooms);
                case 7:
                  result = _context7.sent;
                  console.log("--Back GetRooms:", JsonHelper.ToJson(result));
                  if (!(result.errorCode == 0)) {
                    _context7.next = 14;
                    break;
                  }
                  console.log("--end GetRooms success, count:", JsonHelper.ToJson(result.data));
                  return _context7.abrupt("return", result.data);
                case 14:
                  console.warn("GetRooms failed:", result.errorCode);
                  return _context7.abrupt("return", null);
                case 16:
                  _context7.next = 22;
                  break;
                case 18:
                  _context7.prev = 18;
                  _context7.t0 = _context7["catch"](4);
                  console.error("\u83B7\u53D6\u623F\u95F4\u5931\u8D25: " + _context7.t0);
                  return _context7.abrupt("return", null);
                case 22:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this, [[4, 18]]);
          }));
          function getRooms() {
            return _getRooms.apply(this, arguments);
          }
          return getRooms;
        }()
        /**
         * 创建房间
         */;

        SignalRManager.createRoom = /*#__PURE__*/
        function () {
          var _createRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(roomName, bet, password) {
            var playerCreateRoomInfo, result;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  playerCreateRoomInfo = {
                    name: roomName,
                    bet: bet,
                    password: password
                  };
                  _context8.prev = 1;
                  _context8.next = 4;
                  return this.invoke(NetPort.CreateRoom, playerCreateRoomInfo);
                case 4:
                  result = _context8.sent;
                  console.log("CreateRoom result:", result);
                  if (!(result.errorCode == 0)) {
                    _context8.next = 10;
                    break;
                  }
                  return _context8.abrupt("return", result.data);
                case 10:
                  return _context8.abrupt("return", null);
                case 11:
                  _context8.next = 17;
                  break;
                case 13:
                  _context8.prev = 13;
                  _context8.t0 = _context8["catch"](1);
                  console.error("创建房间失败:", _context8.t0);
                  return _context8.abrupt("return", null);
                case 17:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this, [[1, 13]]);
          }));
          function createRoom(_x4, _x5, _x6) {
            return _createRoom.apply(this, arguments);
          }
          return createRoom;
        }()
        /**
           * 进入房间
           */;

        SignalRManager.enterRoom = /*#__PURE__*/
        function () {
          var _enterRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(roomId, password) {
            var result, errorMsg;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.prev = 0;
                  _context9.next = 3;
                  return this.invoke(NetPort.EnterRoom, roomId, password);
                case 3:
                  result = _context9.sent;
                  if (!(result.errorCode == 0)) {
                    _context9.next = 8;
                    break;
                  }
                  return _context9.abrupt("return", result.data);
                case 8:
                  errorMsg = "\u52A0\u5165\u5931\u8D25 " + result.errorCode + " roomId " + roomId;
                  console.log(errorMsg);
                  return _context9.abrupt("return", errorMsg);
                case 11:
                  _context9.next = 17;
                  break;
                case 13:
                  _context9.prev = 13;
                  _context9.t0 = _context9["catch"](0);
                  console.error("进入房间失败:", _context9.t0);
                  return _context9.abrupt("return", "连接错误");
                case 17:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this, [[0, 13]]);
          }));
          function enterRoom(_x7, _x8) {
            return _enterRoom.apply(this, arguments);
          }
          return enterRoom;
        }()
        /**
         * 退出房间
         */;

        SignalRManager.exitRoom = /*#__PURE__*/
        function () {
          var _exitRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.prev = 0;
                  _context10.next = 3;
                  return this.invoke(NetPort.ExitRoom);
                case 3:
                  console.log("退出房间成功");
                  return _context10.abrupt("return", true);
                case 7:
                  _context10.prev = 7;
                  _context10.t0 = _context10["catch"](0);
                  console.error("退出房间失败:", _context10.t0);
                  return _context10.abrupt("return", false);
                case 11:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this, [[0, 7]]);
          }));
          function exitRoom() {
            return _exitRoom.apply(this, arguments);
          }
          return exitRoom;
        }()
        /**
         * 选择点数
         */;

        SignalRManager.chosePoint = /*#__PURE__*/
        function () {
          var _chosePoint = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(point) {
            var result;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.prev = 0;
                  _context11.next = 3;
                  return this.invoke(NetPort.ChosePoint, point);
                case 3:
                  result = _context11.sent;
                  return _context11.abrupt("return", result.errorCode == 0);
                case 7:
                  _context11.prev = 7;
                  _context11.t0 = _context11["catch"](0);
                  console.error("选择点数失败:", _context11.t0);
                  return _context11.abrupt("return", false);
                case 11:
                case "end":
                  return _context11.stop();
              }
            }, _callee11, this, [[0, 7]]);
          }));
          function chosePoint(_x9) {
            return _chosePoint.apply(this, arguments);
          }
          return chosePoint;
        }()
        /**
         * 获取金币
         */;

        SignalRManager.getGold = /*#__PURE__*/
        function () {
          var _getGold = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
            var result;
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.prev = 0;
                  _context12.next = 3;
                  return this.invoke(NetPort.GetGold);
                case 3:
                  result = _context12.sent;
                  if (!(result.errorCode == 0)) {
                    _context12.next = 8;
                    break;
                  }
                  return _context12.abrupt("return", result.data);
                case 8:
                  return _context12.abrupt("return", 0);
                case 9:
                  _context12.next = 15;
                  break;
                case 11:
                  _context12.prev = 11;
                  _context12.t0 = _context12["catch"](0);
                  console.error("获取金币失败:", _context12.t0);
                  return _context12.abrupt("return", 0);
                case 15:
                case "end":
                  return _context12.stop();
              }
            }, _callee12, this, [[0, 11]]);
          }));
          function getGold() {
            return _getGold.apply(this, arguments);
          }
          return getGold;
        }()
        /**
         * 注册服务器消息监听
         */;

        SignalRManager.registerServerMessages = function registerServerMessages() {
          if (!this.connection) return;

          // 玩家进入房间
          this.on(NetPort.EnterRoom, function (roomId, playerInfo) {
            // GameCtrl.I.OnPlayerEnterGame(roomId, playerInfo);
            console.log("Player entered room:", roomId, playerInfo);
          });

          // 玩家退出房间
          this.on(NetPort.ExitRoom, function (roomId, playerInfo) {
            // GameCtrl.I.OnPlayerExitGame(roomId, playerInfo);
            console.log("Player exited room:", roomId, playerInfo);
          });

          // 倒计时
          this.on(NetPort.OnCountdown, function (roomId, sec) {
            // GameCtrl.I.OnCountdown(roomId, sec);
            console.log("Countdown:", roomId, sec);
          });

          // 计算中（摇骰子动画）
          this.on(NetPort.OnComputing, function (roomId) {
            // GameCtrl.I.ChangeOnComputing(roomId);
            console.log("Computing started:", roomId);
          });

          // 结算完成
          this.on(NetPort.OnSettled, function (roomId, settlementData) {
            // GameCtrl.I.DoOnSettled(roomId, settlementData);
            console.log("Settlement:", roomId, settlementData);
          });

          // 下注
          this.on(NetPort.OnBet, function (roomId, playerEmail) {
            // GameCtrl.I.OnBet(roomId, playerEmail);
            console.log("Bet placed:", roomId, playerEmail);
          });

          // 错误
          this.on(NetPort.OnError, function (settlementData) {
            console.error("Game error:", settlementData);
          });
        }

        /**
         * 泛型调用方法
         */;
        SignalRManager.invoke = /*#__PURE__*/
        function () {
          var _invoke = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(methodName) {
            var _this$connection,
              _len,
              args,
              _key,
              _args13 = arguments;
            return _regeneratorRuntime().wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  if (this.isConnected()) {
                    _context13.next = 2;
                    break;
                  }
                  throw new Error('SignalR connection not ready');
                case 2:
                  _context13.prev = 2;
                  for (_len = _args13.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = _args13[_key];
                  }
                  _context13.next = 6;
                  return (_this$connection = this.connection).invoke.apply(_this$connection, [methodName].concat(args));
                case 6:
                  return _context13.abrupt("return", _context13.sent);
                case 9:
                  _context13.prev = 9;
                  _context13.t0 = _context13["catch"](2);
                  console.error("\u8C03\u7528\u65B9\u6CD5 " + methodName + " \u5931\u8D25\uFF1A", _context13.t0);
                  throw _context13.t0;
                case 13:
                case "end":
                  return _context13.stop();
              }
            }, _callee13, this, [[2, 9]]);
          }));
          function invoke(_x10) {
            return _invoke.apply(this, arguments);
          }
          return invoke;
        }();
        return SignalRManager;
      }());
      SignalRManager.connection = null;
      SignalRManager.isInitialized = false;
      SignalRManager.reconnectAttempts = 0;
      SignalRManager.maxReconnectAttempts = 5;
      SignalRManager.eventCallbacks = new Map();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StorageUtil.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "53190HwjVpPFpZMiEwIc0du", "StorageUtil", undefined);
      var StorageUtil = exports('StorageUtil', /*#__PURE__*/function () {
        function StorageUtil() {}
        // 安全地设置项目
        StorageUtil.setItem = function setItem(key, value) {
          try {
            sys.localStorage.setItem(key, value);
            return true;
          } catch (error) {
            console.error("\u8BBE\u7F6E localStorage \u9879 '" + key + "' \u5931\u8D25:", error);
            return false;
          }
        }

        // 安全地获取项目
        ;

        StorageUtil.getItem = function getItem(key) {
          try {
            return sys.localStorage.getItem(key);
          } catch (error) {
            console.error("\u83B7\u53D6 localStorage \u9879 '" + key + "' \u5931\u8D25:", error);
            return null;
          }
        }

        // 存储数值
        ;

        StorageUtil.setNumber = function setNumber(key, value) {
          return this.setItem(key, value.toString());
        }

        // 获取数值，如果不存在或无效则返回默认值
        ;

        StorageUtil.getNumber = function getNumber(key, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = 0;
          }
          var value = this.getItem(key);
          if (value === null) return defaultValue;
          var num = parseFloat(value);
          return isNaN(num) ? defaultValue : num;
        }

        // 存储布尔值
        ;

        StorageUtil.setBoolean = function setBoolean(key, value) {
          return this.setItem(key, value ? 'true' : 'false');
        }

        // 获取布尔值，如果不存在则返回默认值
        ;

        StorageUtil.getBoolean = function getBoolean(key, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = false;
          }
          var value = this.getItem(key);
          if (value === null) return defaultValue;
          return value === 'true';
        }

        // 存储对象
        ;

        StorageUtil.setObject = function setObject(key, value) {
          try {
            var serialized = JSON.stringify(value);
            return this.setItem(key, serialized);
          } catch (error) {
            console.error("\u5E8F\u5217\u5316\u5B58\u50A8\u5BF9\u8C61\u5931\u8D25 '" + key + "':", error);
            return false;
          }
        }

        // 获取对象，如果不存在或解析失败则返回默认值
        ;

        StorageUtil.getObject = function getObject(key, defaultValue) {
          var value = this.getItem(key);
          if (value === null) return defaultValue;
          try {
            return JSON.parse(value);
          } catch (error) {
            console.error("\u89E3\u6790\u5B58\u50A8\u5BF9\u8C61\u5931\u8D25 '" + key + "':", error);
            return defaultValue;
          }
        }

        // 移除项目
        ;

        StorageUtil.removeItem = function removeItem(key) {
          try {
            sys.localStorage.removeItem(key);
          } catch (error) {
            console.error("\u79FB\u9664 localStorage \u9879 '" + key + "' \u5931\u8D25:", error);
          }
        }

        // 检查项目是否存在
        ;

        StorageUtil.hasItem = function hasItem(key) {
          return this.getItem(key) !== null;
        }

        // 清空所有存储
        ;

        StorageUtil.clear = function clear() {
          try {
            sys.localStorage.clear();
          } catch (error) {
            console.error('清空 localStorage 失败:', error);
          }
        };
        return StorageUtil;
      }());

      // 定义玩家数据接口
      // interface PlayerData {
      //     name: string;
      //     level: number;
      //     experience: number;
      //     inventory: string[];
      //     lastLogin: Date;
      // }

      // // 存储玩家数据
      // const playerData: PlayerData = {
      //     name: 'Tracer',
      //     level: 5,
      //     experience: 1250,
      //     inventory: ['sword', 'shield', 'potion'],
      //     lastLogin: new Date()
      // };

      // StorageUtil.setObject('playerData', playerData);

      // // 读取玩家数据
      // const savedPlayerData = StorageUtil.getObject<PlayerData>('playerData', {
      //     name: 'NewPlayer',
      //     level: 1,
      //     experience: 0,
      //     inventory: [],
      //     lastLogin: new Date()
      // });

      // console.log(`Player: ${savedPlayerData.name}, Level: ${savedPlayerData.level}`);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TipPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIBase.ts', './UIManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, UIBase, UIManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      UIBase = module.UIBase;
    }, function (module) {
      UIManager = module.UIManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "88729YAAd9PV5fwa9d8XsCo", "TipPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /*
      调用提示
      TipPanel.showTips("登录失败，请检查网络连接");
      TipPanel.showTips("操作成功", 2.5);
      */

      var TipPanel = exports('TipPanel', (_dec = ccclass('TipPanel'), _dec2 = property(Label), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_UIBase) {
        _inheritsLoose(TipPanel, _UIBase);
        function TipPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIBase.call.apply(_UIBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "infoLabel", _descriptor, _assertThisInitialized(_this));
          _this.timer = 0;
          return _this;
        }
        // 存储所有活动的提示面板
        /**
         * 显示提示信息
         * @param info 提示内容
         * @param time 显示时间（秒），默认1.8秒
         */
        TipPanel.showTips = /*#__PURE__*/
        function () {
          var _showTips = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(info, time) {
            var tipNode, tipPanel;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (time === void 0) {
                    time = 1.8;
                  }
                  _context.prev = 1;
                  _context.next = 4;
                  return UIManager.I.openNoCache("ui/TipPanel", info, time);
                case 4:
                  tipNode = _context.sent;
                  if (tipNode) {
                    // 添加到活动提示集合
                    this.activeTips.add(tipNode);

                    // 设置自动销毁
                    tipPanel = tipNode.getComponent(TipPanel);
                    if (tipPanel) {
                      tipPanel.setAutoDestroyTimer(time);
                    }
                  }
                  _context.next = 11;
                  break;
                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](1);
                  console.error("显示提示失败:", _context.t0);
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[1, 8]]);
          }));
          function showTips(_x, _x2) {
            return _showTips.apply(this, arguments);
          }
          return showTips;
        }()
        /**
         * 移除提示面板引用
         * @param tipNode 要移除的提示节点
         */;

        TipPanel.removeTipReference = function removeTipReference(tipNode) {
          this.activeTips["delete"](tipNode);
        }

        /**
         * 关闭所有提示面板
         */;
        TipPanel.closeAllTips = function closeAllTips() {
          this.activeTips.forEach(function (tipNode) {
            if (tipNode && tipNode.isValid) {
              var tipPanel = tipNode.getComponent(TipPanel);
              if (tipPanel) {
                tipPanel.close();
              }
            }
          });
          this.activeTips.clear();
        }

        /**
         * UI打开时调用
         * @param info 提示信息
         * @param time 显示时间
         */;
        var _proto = TipPanel.prototype;
        _proto.onOpen = function onOpen(info, time) {
          this.show(info, time);
        }

        /**
         * UI关闭时调用
         */;
        _proto.onClose = function onClose() {
          this.cleanup();
          TipPanel.removeTipReference(this.node);
        }

        /**
         * 显示提示信息
         * @param info 提示内容
         * @param time 显示时间（秒）
         */;
        _proto.show = function show(info, time) {
          if (this.infoLabel) {
            this.infoLabel.string = info;
          }

          // 设置自动关闭计时器
          this.setAutoCloseTimer(time);
        }

        /**
         * 设置自动关闭计时器
         * @param time 延迟时间（秒）
         */;
        _proto.setAutoCloseTimer = function setAutoCloseTimer(time) {
          var _this2 = this;
          // 清除之前的计时器
          this.cleanup();

          // 设置新的计时器
          this.timer = setTimeout(function () {
            _this2.close();
          }, time * 1000);
        }

        /**
         * 设置自动销毁计时器（确保即使没手动关闭也会销毁）
         * @param time 延迟时间（秒）
         */;
        _proto.setAutoDestroyTimer = function setAutoDestroyTimer(time) {
          var _this3 = this;
          setTimeout(function () {
            if (_this3.node && _this3.node.isValid) {
              _this3.cleanup();
              TipPanel.removeTipReference(_this3.node);
              if (_this3.node.parent) {
                _this3.node.destroy();
              }
            }
          }, (time + 0.5) * 1000); // 多加0.5秒确保
        }

        /**
         * 关闭提示面板
         */;
        _proto.close = function close() {
          this.cleanup();

          // 从父节点移除并销毁
          if (this.node && this.node.isValid) {
            TipPanel.removeTipReference(this.node);
            if (this.node.parent) {
              this.node.removeFromParent();
            }
            this.node.destroy();
          }
        }

        /**
         * 立即关闭当前提示
         */;
        _proto.closeImmediately = function closeImmediately() {
          this.close();
        }

        /**
         * 清理资源
         */;
        _proto.cleanup = function cleanup() {
          if (this.timer) {
            clearTimeout(this.timer);
            this.timer = 0;
          }
        }

        /**
         * 节点销毁时调用
         */;
        _proto.onDestroy = function onDestroy() {
          this.cleanup();
          TipPanel.removeTipReference(this.node);
          _UIBase.prototype.onDestroy && _UIBase.prototype.onDestroy.call(this);
        }

        /**
         * 更新提示内容
         * @param newInfo 新的提示信息
         */;
        _proto.updateInfo = function updateInfo(newInfo) {
          if (this.infoLabel) {
            this.infoLabel.string = newInfo;
          }
        }

        /**
         * 重新设置显示时间
         * @param newTime 新的显示时间（秒）
         */;
        _proto.resetTimer = function resetTimer(newTime) {
          this.setAutoCloseTimer(newTime);
        };
        return TipPanel;
      }(UIBase), _class3.activeTips = new Set(), _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "infoLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TopBarMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameMain.ts', './LanguageCore.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, Node, Component, GameMain, LanguageCore;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      LanguageCore = module.LanguageCore;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "31a32tOiv5Ec4RysYjKW+Lb", "TopBarMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TopBarMain = exports('TopBarMain', (_dec = ccclass('TopBarMain'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Button
      }), _dec4 = property({
        type: Button
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Button
      }), _dec7 = property({
        type: Button
      }), _dec8 = property({
        type: Button
      }), _dec9 = property({
        type: Button
      }), _dec10 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TopBarMain, _Component);
        function TopBarMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "coinsCount", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "settngBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "backBtn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "settingPanelNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeSettingBtn", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "quickBtn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicBtn", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyBtn", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "musicLabel", _descriptor9, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TopBarMain.prototype;
        _proto.update = function update(deltaTime) {};
        _proto.start = function start() {
          this.initButtons();
          this.onCloseSettingClick();
          this.updateMusicLabel();
        };
        _proto.updateMusicLabel = function updateMusicLabel() {
          var langId = GameMain.instance.savedPlayerData.musinOn ? '106' : '120';
          this.musicLabel.string = LanguageCore.getLang(langId);
        }

        // 初始化按钮点击事件
        ;

        _proto.initButtons = function initButtons() {
          // 设置按钮点击事件
          if (this.settngBtn) {
            this.settngBtn.node.on(Button.EventType.CLICK, this.onSettingClick, this);
          }
          if (this.closeSettingBtn) {
            this.closeSettingBtn.node.on(Button.EventType.CLICK, this.onCloseSettingClick, this);
          }

          // 返回按钮点击事件
          if (this.backBtn) {
            this.backBtn.node.on(Button.EventType.CLICK, this.onBackClick, this);
          }

          // 其他按钮点击事件
          if (this.quickBtn) {
            this.quickBtn.node.on(Button.EventType.CLICK, this.onQuickClick, this);
          }
          if (this.musicBtn) {
            this.musicBtn.node.on(Button.EventType.CLICK, this.onMusicClick, this);
          }
          if (this.historyBtn) {
            this.historyBtn.node.on(Button.EventType.CLICK, this.onHistoryClick, this);
          }
        }

        // 设置按钮点击事件
        ;

        _proto.onSettingClick = function onSettingClick() {
          this.showSettingPanel();
        };
        _proto.onCloseSettingClick = function onCloseSettingClick() {
          this.settingPanelNode.active = false;
        }

        // 返回按钮点击事件
        ;

        _proto.onBackClick = function onBackClick() {
          // 实现返回逻辑
          console.log("Back button clicked");
        }

        // 快捷按钮点击事件
        ;

        _proto.onQuickClick = function onQuickClick() {
          // 实现快捷功能逻辑
          console.log("Quick button clicked");
        }

        // 音乐按钮点击事件
        ;

        _proto.onMusicClick = function onMusicClick() {
          // 实现音乐开关逻辑
          console.log("Music button clicked");
          GameMain.instance.savedPlayerData.musinOn = !GameMain.instance.savedPlayerData.musinOn;
          GameMain.instance.doSavedPlayerData();
          this.updateMusicLabel();
        }

        // 历史按钮点击事件
        ;

        _proto.onHistoryClick = function onHistoryClick() {
          // 实现历史记录逻辑
          console.log("History button clicked");
        }

        // 显示设置面板
        ;

        _proto.showSettingPanel = function showSettingPanel() {
          if (this.settingPanelNode) {
            this.settingPanelNode.active = true;
          }
        }

        // 设置金币数量
        ;

        _proto.setCoinsCount = function setCoinsCount(count) {
          if (this.coinsCount) {
            this.coinsCount.string = GameMain.instance.savedPlayerData.lastCurrency + ":" + count;
          }
        }

        // 更新金币数量（增加或减少）
        ;

        _proto.updateCoinsCount = function updateCoinsCount(delta) {
          if (this.coinsCount) {
            var current = parseInt(this.coinsCount.string || "0");
            this.setCoinsCount(current + delta);
          }
        }

        // 组件销毁时清理事件监听
        ;

        _proto.onDestroy = function onDestroy() {
          if (this.settngBtn) {
            this.settngBtn.node.off(Button.EventType.CLICK, this.onSettingClick, this);
          }
          if (this.backBtn) {
            this.backBtn.node.off(Button.EventType.CLICK, this.onBackClick, this);
          }
          if (this.quickBtn) {
            this.quickBtn.node.off(Button.EventType.CLICK, this.onQuickClick, this);
          }
          if (this.musicBtn) {
            this.musicBtn.node.off(Button.EventType.CLICK, this.onMusicClick, this);
          }
          if (this.historyBtn) {
            this.historyBtn.node.off(Button.EventType.CLICK, this.onHistoryClick, this);
          }
          if (this.closeSettingBtn) {
            this.closeSettingBtn.node.off(Button.EventType.CLICK, this.onCloseSettingClick, this);
          }
        };
        return TopBarMain;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinsCount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "settngBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "backBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "settingPanelNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "closeSettingBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "quickBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "musicBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "historyBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "musicLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "3994cWlor1HQZ08Wr3G6moi", "UIBase", undefined);
      var ccclass = _decorator.ccclass;
      var UIBase = exports('UIBase', (_dec = ccclass('UIBase'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIBase, _Component);
        function UIBase() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = UIBase.prototype;
        /** 打开时调用 */
        _proto.onOpen = function onOpen() {}

        /** 关闭时调用 */;
        _proto.onClose = function onClose() {
          this.node.active = false;
        };
        return UIBase;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIDefine.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "7c848uAYiJIxqk2Utlywc/3", "UIDefine", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIDefine = exports('UIDefine', (_dec = ccclass('UIDefine'), _dec(_class = (_class2 = function UIDefine() {}, _class2.SearchPanel = 'ui/SearchPanel', _class2.LobbyPanel = 'ui/LobbyPanel', _class2.LoginPanel = 'ui/LoginPanel', _class2.CreatRoomView = 'ui/CreatRoomView', _class2.SerchContentView = 'ui/SerchContentView', _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIBase.ts', './GameMain.ts', './AssetsLoader.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, instantiate, resources, Prefab, UIBase, GameMain, AssetsLoader;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
      resources = module.resources;
      Prefab = module.Prefab;
    }, function (module) {
      UIBase = module.UIBase;
    }, function (module) {
      GameMain = module.GameMain;
    }, function (module) {
      AssetsLoader = module.AssetsLoader;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "1b5683/FMhLB4FBA65G2HGF", "UIManager", undefined);
      var ccclass = _decorator.ccclass;

      // async onClickOpenUI() {
      //     await UIManager.I.open('ui/LoginUI'); // 假设 prefab 在 resources/ui/LoginUI
      // }

      // onClickCloseUI() {
      //     UIManager.I.close('ui/LoginUI');
      // }

      var UIManager = exports('UIManager', (_dec = ccclass('UIManager'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function UIManager() {
          this.uiRoot = null;
          this.uiCache = new Map();
        }
        var _proto = UIManager.prototype;
        /** 初始化UIRoot节点（一般在Game场景启动时调用） */
        _proto.init = function init(root) {
          this.uiRoot = root;
        };
        _proto.openNoCache = function openNoCache(uiPath) {
          var _this = this;
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          if (GameMain.instance.usedBundle) {
            return new Promise(function (resolve, reject) {
              AssetsLoader.instance.getUI(uiPath, function (err, prefab) {
                var _uiNode$getComponent;
                if (err) {
                  console.error("\u52A0\u8F7DUI\u5931\u8D25: " + uiPath, err);
                  reject(err);
                  return;
                }
                var uiNode = instantiate(prefab);
                _this.uiRoot.addChild(uiNode);
                (_uiNode$getComponent = uiNode.getComponent(UIBase)) == null || _uiNode$getComponent.onOpen.apply(_uiNode$getComponent, args);
                resolve(uiNode);
              });
            });
          } else {
            return new Promise(function (resolve, reject) {
              resources.load(uiPath, Prefab, function (err, prefab) {
                var _uiNode$getComponent2;
                if (err) {
                  console.error("\u52A0\u8F7DUI\u5931\u8D25: " + uiPath, err);
                  reject(err);
                  return;
                }
                var uiNode = instantiate(prefab);
                _this.uiRoot.addChild(uiNode);
                (_uiNode$getComponent2 = uiNode.getComponent(UIBase)) == null || _uiNode$getComponent2.onOpen.apply(_uiNode$getComponent2, args);
                resolve(uiNode);
              });
            });
          }
        }

        /** 打开UI */;
        _proto.open = /*#__PURE__*/
        function () {
          var _open = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(uiPath) {
            var _this2 = this;
            var _len2,
              args,
              _key2,
              _uiNode$getComponent3,
              uiNode,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  for (_len2 = _args.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    args[_key2 - 1] = _args[_key2];
                  }
                  if (this.uiRoot) {
                    _context.next = 4;
                    break;
                  }
                  console.error('UIRoot 未初始化');
                  return _context.abrupt("return", null);
                case 4:
                  if (!this.uiCache.has(uiPath)) {
                    _context.next = 9;
                    break;
                  }
                  uiNode = this.uiCache.get(uiPath);
                  uiNode.active = true;
                  (_uiNode$getComponent3 = uiNode.getComponent(UIBase)) == null || _uiNode$getComponent3.onOpen.apply(_uiNode$getComponent3, args);
                  return _context.abrupt("return", uiNode);
                case 9:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    if (GameMain.instance.usedBundle) {
                      return new Promise(function (resolve, reject) {
                        AssetsLoader.instance.getUI(uiPath, function (err, prefab) {
                          var _uiNode$getComponent4;
                          if (err) {
                            console.error("\u52A0\u8F7DUI\u5931\u8D25: " + uiPath, err);
                            reject(err);
                            return;
                          }
                          console.log("\u52A0\u8F7DUI\u6210\u529F: " + uiPath);
                          var uiNode = instantiate(prefab);
                          _this2.uiRoot.addChild(uiNode);
                          (_uiNode$getComponent4 = uiNode.getComponent(UIBase)) == null || _uiNode$getComponent4.onOpen.apply(_uiNode$getComponent4, args);
                          resolve(uiNode);
                        });
                      });
                    } else {
                      return new Promise(function (resolve, reject) {
                        resources.load(uiPath, Prefab, function (err, prefab) {
                          var _uiNode$getComponent5;
                          if (err) {
                            console.error("\u52A0\u8F7DUI\u5931\u8D25: " + uiPath, err);
                            reject(err);
                            return;
                          }
                          var uiNode = instantiate(prefab);
                          _this2.uiRoot.addChild(uiNode);
                          (_uiNode$getComponent5 = uiNode.getComponent(UIBase)) == null || _uiNode$getComponent5.onOpen.apply(_uiNode$getComponent5, args);
                          resolve(uiNode);
                        });
                      });
                    }

                    // resources.load(uiPath, Prefab, (err, prefab) => {
                    //     if (err) {
                    //         console.error(`加载UI失败: ${uiPath}`, err);
                    //         reject(err);
                    //         return;
                    //     }

                    //     let uiNode = instantiate(prefab!);
                    //     this.uiRoot!.addChild(uiNode);
                    //     this.uiCache.set(uiPath, uiNode);

                    //     uiNode.getComponent(UIBase)?.onOpen(...args);
                    //     resolve(uiNode);
                    // });
                  }));

                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function open(_x) {
            return _open.apply(this, arguments);
          }
          return open;
        }() /** 关闭UI */;
        _proto.close = function close(uiPath) {
          var _uiNode$getComponent6;
          if (!this.uiCache.has(uiPath)) return;
          var uiNode = this.uiCache.get(uiPath);
          (_uiNode$getComponent6 = uiNode.getComponent(UIBase)) == null || _uiNode$getComponent6.onClose();
        }

        /** 销毁UI */;
        _proto.destroy = function destroy(uiPath) {
          if (!this.uiCache.has(uiPath)) return;
          var uiNode = this.uiCache.get(uiPath);
          uiNode.destroy();
          this.uiCache["delete"](uiPath);
        }

        /** 销毁UI */;
        _proto.destroyUI = function destroyUI(uiNodeDes) {
          var uiPathStep = this.getKeyByNode(uiNodeDes);
          this.destroy(uiPathStep);
        }

        // 通过Node查找key
        ;

        _proto.getKeyByNode = function getKeyByNode(targetNode) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.uiCache.entries()), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              key = _step$value[0],
              node = _step$value[1];
            if (node === targetNode) {
              return key;
            }
          }
          return undefined;
        }

        // 通过Node删除
        ;

        _proto.removeByNode = function removeByNode(targetNode) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.uiCache.entries()), _step2; !(_step2 = _iterator2()).done;) {
            var _step2$value = _step2.value,
              key = _step2$value[0],
              node = _step2$value[1];
            if (node === targetNode) {
              this.uiCache["delete"](key);
              return true;
            }
          }
          return false;
        };
        _createClass(UIManager, null, [{
          key: "I",
          get: function get() {
            if (!this._instance) {
              this._instance = new UIManager();
            }
            return this._instance;
          }
        }]);
        return UIManager;
      }(), _class2._instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});