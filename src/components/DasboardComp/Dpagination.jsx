import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',

    alignItems: 'center',
});

const PaginationButton = styled('button')(({ selected }) => ({
    background: 'none',
    border: '1px solid #d7d3d3',
    cursor: 'pointer',
    padding: '6px 12px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: selected ? '#000' : '#666',
    borderBottom: selected ? '2px solid #000' : '2px solid transparent',
    fontWeight: selected ? 'bold' : 'normal',
    transition: 'all 0.2s ease',


}));

export default function Pagination() {
    const { items } = usePagination({
        count: 3,
    });

    return (
        <nav>
            <List>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = <span style={{ padding: '0 6px' }}>…</span>;
                    } else if (type === 'previous') {
                        children = (
                            <PaginationButton type="button" {...item}>
                                <ChevronLeftIcon fontSize="small" />
                            </PaginationButton>
                        );
                    } else if (type === 'next') {
                        children = (
                            <PaginationButton type="button" {...item}>
                                <ChevronRightIcon fontSize="small" />
                            </PaginationButton>
                        );
                    } else if (type === 'page') {
                        children = (
                            <PaginationButton type="button" selected={selected} {...item}>
                                {page}
                            </PaginationButton>
                        );
                    }

                    return <li key={index}>{children}</li>;
                })}
            </List>
        </nav>
    );
}