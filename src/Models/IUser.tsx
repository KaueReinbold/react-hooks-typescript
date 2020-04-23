import IRepository from './IRepository';

export default interface IUser {
  name: string;
  login: string;
  avatart_url: string;
  all_repos_name: string;
  repos: IRepository[];
}
