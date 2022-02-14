"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import bodyParser from 'body-parser'
const mongoose_1 = __importDefault(require("mongoose"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const estate_routes_1 = __importDefault(require("./routes/estate.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());
mongoose_1.default.connect("mongodb://localhost:27017/real_estate");
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    console.log('Uspesna konekcija');
});
const router = express_1.default.Router();
router.use('/users', user_routes_1.default);
router.use('/estates', estate_routes_1.default);
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map