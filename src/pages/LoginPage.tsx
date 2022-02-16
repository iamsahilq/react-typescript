import * as React from 'react';

export interface ILoginPageProps {}

export default class LoginPage extends React.Component<ILoginPageProps> {
  public render() {
    return (
      <div>
        <form>
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              e.preventDefault()
            }
          >
            Submit
          </button>
          <p className="my-2 forgot-password text-right">
            Forgot <a href="/login">password?</a>
          </p>
        </form>
      </div>
    );
  }
}
