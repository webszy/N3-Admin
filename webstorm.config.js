import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export default {
    resolve: {
        extensions: ['.js', '.ts','.json', '.vue'],
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
}