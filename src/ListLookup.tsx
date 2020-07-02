
import { eContentType, eLoadingState, FlowComponent, FlowField, FlowObjectData, FlowObjectDataArray, FlowObjectDataProperty, ModalDialog, modalDialogButton } from 'flow-component-model';
import * as React from 'react';
import './css/ListLookup.css';

declare var manywho: any;

class ListLookup extends FlowComponent {

    caption: string;
    value: string;

    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        await super.componentDidMount();
        this.caption = this.model.label;
        const currentValue: number = this.getStateValue() as number;

        const list: FlowObjectDataArray = this.model.dataSource;
        this.value = list.getItemWithPropertyName('numericValue', currentValue, 'Label').value;

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
