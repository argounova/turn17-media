import styled from "@emotion/styled"

export const DashboardStyles = styled.div`


.btn-new {
    width: 380px;
    height: 75px;
    margin: 20px;
    background-color: var(--mb1-3);
    color: var(--char5);
    font-size: var(--p);

    &:hover {
        background-color: var(--mb1-4);
    }
}

.btn-showhide {
    width: 380px;
    height: 75px;
    margin: 20px;
    background-color: var(--mb2-2);
    color: var(--char5);
    font-size: var(--p);

    &:hover {
        background-color: var(--mb2-3);
    }
}

.btn-paydeposit {
    margin: 20px;
    background-color: var(--mb1-1);
    font-size: var(--p);

    &:hover {
        background-color: var(--mb1-2);
    }
}
`