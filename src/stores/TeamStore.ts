import axios from 'axios';
import { action, observable } from 'mobx';

export interface IMember {
  id: number;
  picture: string;
  role: string;
  username: string;
}

class TeamStore {
  @observable public teamList: IMember[] = [];
  @observable public teamMembers: IMember[] = [];
  @observable public isLoading: boolean = false;
  @observable public error: null | string = null;

  @action.bound
  public async fetchTeamData() {
    this.isLoading = true;
    this.error = null;
    try {
      const result = await axios.get('https://api.myjson.com/bins/126nwk');
      this.teamList = result.data;
      this.teamMembers = result.data.slice(1, 8);
      this.isLoading = false;
    } catch (error) {
      this.error = error;
      this.isLoading = false;
    }
  }

  @action
  public onClickDeleteTeamMember(id: number) {
    const newMemberList = this.teamMembers.filter((member: IMember) => {
      return member.id !== id;
    });
    this.teamMembers = newMemberList;
  }

  @action.bound
  public onClickAddTeamMember(member: IMember) {
    this.teamMembers.unshift(member);
  }
}
export const instance = new TeamStore();
