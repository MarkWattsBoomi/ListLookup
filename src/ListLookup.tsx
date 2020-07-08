
import { eContentType, eLoadingState, FlowComponent, FlowField, FlowObjectData, FlowObjectDataArray, FlowObjectDataProperty, ModalDialog, modalDialogButton } from 'flow-component-model';
import * as React from 'react';
import './css/ListLookup.css';

declare var manywho: any;

class ListLookup extends FlowComponent {

    caption: string = '';
    value: string = '';

    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        await super.componentDidMount();
        this.caption = this.model.label;
        const currentValue: string = this.getStateValue() as string;

        if (currentValue && currentValue.length > 0) {
            const v: number = parseInt(currentValue);
            const list: FlowObjectDataArray = this.model.dataSource;
            this.value = list.getItemWithPropertyName('numericValue', currentValue, 'Label').value;
        } else {
            this.value = 'No Value Recorded';
        }

        this.forceUpdate();
    }

    render() {

        return (
            <div>
            <span>
                {this.caption + '  ' + this.value}
            </span>
            </div>
            );
    }

}

manywho.component.register('ListLookup', ListLookup);

export default ListLookup;
