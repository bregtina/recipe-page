import styled from 'styled-components';

const StyledTable = styled.table`

  width: 100%;
  border-collapse: collapse;

  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.lightGrey};
    padding: 12px 0 12px 12px;
  }

  td:first-child + td {
    color: ${({ theme }) => theme.colors.heading.nutmeg};
    font-weight: 700;
  }

  td:first-child {
    padding-left: 32px;
    width: 50%;
  }

  tr:last-child > td {
    border-bottom: none;
`;
export default StyledTable;
