import React, { useState } from 'react';

const LoginPage = () => {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const handleCreateRoom = () => {
    console.log('Creating a room...');
  };

  const handleJoinRoom = () => {
    console.log(`Joining room ${roomId} as ${username}...`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sharescribe</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="roomId" className="sr-only">Room ID</label>
              <input
                id="roomId"
                name="roomId"
                type="text"
                autoComplete="off"
                required
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Room ID"
              />
            </div>
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="off"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={handleCreateRoom}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create a Room
            </button>
          </div>
          <div>
            <button
              type="submit"
              onClick={handleJoinRoom}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Join a Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
