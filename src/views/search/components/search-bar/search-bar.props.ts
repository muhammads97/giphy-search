export interface ISearchBarProps {
  search: (keyword: string) => void;
  showSearch: () => void;
  cancelSearch: () => void;
  clearSearch: () => void;
}
