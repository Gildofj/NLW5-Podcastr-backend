"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var episodes_1 = __importDefault(require("./routes/episodes"));
dotenv_1.default.config();
// Connect to MongoDB database
mongoose_1.default
    .connect((_a = process.env.MONGO_URI) !== null && _a !== void 0 ? _a : "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(function () {
    console.log("Connected to database!");
    var app = express_1.default();
    app.use("/api", episodes_1.default);
    app.use(cors_1.default);
    app.use(express_1.default.json());
    var port = process.env.PORT || 3333;
    app.listen(port, function () { return console.log("App listening on PORT " + port); });
})
    .catch(function () { return console.error.bind("Error connect to database"); });
