import React from 'react'
import Wrapper from '../../Wrapper'
import Path from '../../../components/CmsComp/Path'

import Table1 from '../../../components/TablesComp/Table1'
import Table2 from '../../../components/TablesComp/Table2'
import Table3 from '../../../components/TablesComp/Table3'
import Table4 from '../../../components/TablesComp/Table4'
import Table5 from '../../../components/TablesComp/Table5'
import Table6 from '../../../components/TablesComp/Table6'
import Table7 from '../../../components/TablesComp/Table7'

export default function Tables() {
    return (
        <Wrapper>
            <div className="bg-(--bg-body) min-h-screen flex flex-col gap-6 px-4 sm:px-6 lg:px-8 py-4">
                <Path mainpath="Tables" path="Table" />

                <div className="w-full overflow-x-auto"><Table1 /></div>
                <div className="w-full overflow-x-auto"><Table2 /></div>
                <div className="w-full overflow-x-auto"><Table3 /></div>
                <div className="w-full overflow-x-auto"><Table4 /></div>
                <div className="w-full overflow-x-auto"><Table5 /></div>
                <div className="w-full overflow-x-auto"><Table6 /></div>
                <div className="w-full overflow-x-auto"><Table7 /></div>
            </div>
        </Wrapper>
    )
}