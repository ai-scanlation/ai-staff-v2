import {
    find
} from 'modules';
module.exports = function explorerToggleProperty(id, value) {
    const explorerModeStyle = this.explorerConfig.style.explorerMode;
    for (const section in explorerModeStyle) {
        if (explorerModeStyle[section]['@show']) {
            explorerModeStyle[section]['@show'][id] = value;
        }
    }
    // find('table[explorerTable]', this).updateStyle('explorerMode');
};
