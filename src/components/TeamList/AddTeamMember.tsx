import * as React from 'react';
import { Component, RefObject } from 'react';
import Autosuggest from 'react-autosuggest';
import { Media } from 'reactstrap';
import { IMember } from '../../stores/TeamStore';

interface IState {
  isSearchActive: boolean;
  query: string;
  suggestions: IMember[];
}

interface IProps {
  list: IMember[];
  members: IMember[];
  onMemberClick: (member: IMember) => void;
}

class AddTeamMember extends Component<IProps, IState> {
  private addMemberNode: RefObject<HTMLDivElement>;
  constructor(props: IProps) {
    super(props);
    this.state = {
      isSearchActive: false,
      query: '',
      suggestions: [],
    };
    this.addMemberNode = React.createRef();
  }

  public componentDidMount() {
    document.addEventListener('click', this.closeSearch, true);
  }

  public componentWillUnMount() {
    document.removeEventListener('click', this.closeSearch, false);
  }

  public onClickGetSuggestionValue = (member: IMember) => {
    return `${member.username}`;
  };

  public getSuggestions(value: string) {
    const { list, members } = this.props;
    const inputValue = value.trim().toLowerCase();
    if (!inputValue) {
      return [];
    }

    return list.filter(
      member =>
        member.username.toLowerCase().includes(inputValue) &&
        !members.find(({ id }) => member.id === id)
    );
  }

  public onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  public setSearchVisibility = (isActive: boolean) => {
    this.setState({ isSearchActive: isActive, query: '' });
  };

  public closeSearch = (e: MouseEvent) => {
    if (
      this.addMemberNode.current &&
      !this.addMemberNode.current.contains(e.target as HTMLDivElement)
    ) {
      this.setSearchVisibility(false);
    }
  };

  public onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    this.setState({ suggestions: this.getSuggestions(value) });
  };

  public onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  public renderSuggestion = (member: IMember) => (
    <div
      className="result-member"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        this.props.onMemberClick(member);
        this.setSearchVisibility(false);
      }}
    >
      <Media className="p-0">
        <Media left={true} className="mr-3">
          <img
            className="rounded-circle"
            src={require(`../../assets/images/${member.picture}`)}
            alt={member.username}
          />
        </Media>
        <Media body={true}>
          <p className="is-size-4 text-black m-0">{member.username}</p>
        </Media>
      </Media>
    </div>
  );

  public render() {
    const { setSearchVisibility } = this;
    const { isSearchActive, query, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search name',
      value: query,
      onChange: this.onChange,
    };

    return (
      <div
        className="list-group-add-member"
        onClick={() => setSearchVisibility(true)}
        ref={this.addMemberNode}
      >
        <Media>
          <Media left={true} className="mr-3">
            <div className="is-rounded-add-icon" />
          </Media>
          <Media body={true}>
            <h3 className="is-size-4 text-primary text-bold m-0">
              Add team member to this test
            </h3>
          </Media>
        </Media>
        {isSearchActive && (
          <div className="add-member-autosuggestion text-left">
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={this.onClickGetSuggestionValue}
              renderSuggestion={this.renderSuggestion}
              inputProps={inputProps}
            />
            {query && !suggestions.length && (
              <div className="result-notfound">
                <h3 className="is-size-4 text-primary text-bold m-0">
                  Team member not found.
                  <small className="is-size-6">
                    Maybe she/he is not yet in your team?
                  </small>
                </h3>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export { AddTeamMember };
