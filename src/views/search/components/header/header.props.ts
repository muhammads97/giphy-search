export interface IHeaderProps {
  search: (keyword: string) => void;
  showSearch: () => void;
  cancelSearch: () => void;
  clearSearch: () => void;
}
