import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Component, Fragment } from 'react';
import { Button, ListGroup, ListGroupItem, Media, Spinner } from 'reactstrap';
import { IMember } from '../../stores/TeamStore';
import { AddTeamMember } from './AddTeamMember';
const DEFAULT_ITEM_TO_SHOW = 3;

interface IProps {
  team?: {
    teamList: IMember[];
    teamMembers: IMember[];
    isLoading: boolean;
    error: null | string;
    fetchTeamData: () => void;
    onClickDeleteTeamMember: (id: number) => void;
    onClickAddTeamMember: (member: IMember) => void;
  };
}

interface IState {
  itemsToShow: number;
  expanded: boolean;
}

@inject('team')
@observer
class TeamList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      itemsToShow: 3,
      expanded: false,
    };

    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
    this.handleMemberClick = this.handleMemberClick.bind(this);
  }

  public componentDidMount() {
    this.props.team!.fetchTeamData();
  }

  public handleMemberClick(id: number) {
    this.props.team!.onClickDeleteTeamMember(id);
  }
  public handleShowMoreClick() {
    this.state.itemsToShow === 3
      ? this.setState({
          itemsToShow: this.props.team!.teamMembers.length,
          expanded: true,
        })
      : this.setState({ itemsToShow: DEFAULT_ITEM_TO_SHOW, expanded: false });
  }

  public render() {
    const {
      teamList,
      teamMembers,
      error,
      isLoading,
      onClickAddTeamMember,
    } = this.props.team!;
    const { itemsToShow, expanded } = this.state;
    const { handleMemberClick, handleShowMoreClick } = this;
    if (isLoading) {
      return (
        <div className="d-flex m-5 justify-content-center">
          <Spinner style={{ width: '3rem', height: '3rem' }} color="success" />;
        </div>
      );
    }
    if (error) {
      return <p>Oops!! </p>;
    }
    return (
      <Fragment>
        <ListGroup>
          <ListGroupItem>
            <AddTeamMember
              list={teamList}
              members={teamMembers}
              onMemberClick={onClickAddTeamMember}
            />
          </ListGroupItem>
          {teamMembers.slice(0, itemsToShow).map((item, index) => (
            <ListGroupItem key={index}>
              <Media>
                <Media
                  left={true}
                  className="mr-3"
                  onClick={() => handleMemberClick(item.id)}
                >
                  <img
                    className="rounded-circle"
                    src={require(`../../assets/images/${item.picture}`)}
                    alt={item.name}
                  />
                  <div className="is-rounded-remove-icon" />
                </Media>
                <Media body={true}>
                  <h4 className="text-black m-0">{item.role}</h4>
                  <h3 className="is-size-4 text-black text-bold m-0">
                    {item.name}
                  </h3>
                </Media>
              </Media>
            </ListGroupItem>
          ))}
        </ListGroup>
        {teamMembers.length >= DEFAULT_ITEM_TO_SHOW + 1 && (
          <Button
            className="btn-show-more"
            onClick={() => handleShowMoreClick()}
          >
            {expanded ? 'Show less' : 'Show more'}
          </Button>
        )}
      </Fragment>
    );
  }
}

export { TeamList };
