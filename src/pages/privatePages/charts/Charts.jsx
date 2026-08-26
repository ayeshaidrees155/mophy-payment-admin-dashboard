import React from 'react'
import Wrapper from '../../Wrapper'
import Path from '../../../components/CmsComp/Path'
import DonutChart from '../../../components/ChartsComp/Donut'
import LineChart from '../../../components/ChartsComp/LineChart'
import { Box } from '@mui/material'
import BarChart from '../../../components/ChartsComp/BarChart'
import MultiLineChart from '../../../components/ChartsComp/MultiLineChart'
import SingleBarChart from '../../../components/ChartsComp/SingleBarChart'
import AreaChart from '../../../components/ChartsComp/AreaChart'

export default function Charts() {
    return (
        <Wrapper>
            <Path mainpath="Charts" path="Charts" />
            <Box className="!flex !flex-wrap h-auto gap-14 !my-5">
                <Box className="w-full md:!w-[47%]">
                    <DonutChart />
                </Box>

                <Box className="w-full md:!w-[47%]">                    <LineChart />
                </Box>
                <Box className="w-full md:!w-[47%]">                    <BarChart />
                </Box>
                <Box className="w-full md:!w-[47%]">                    <MultiLineChart />
                </Box>
                <Box className="w-full md:!w-[47%]">                    <SingleBarChart />
                </Box>
                <Box className="w-full md:!w-[47%]">                    <AreaChart />
                </Box>
            </Box>
        </Wrapper>
    )
}

