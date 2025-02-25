import React from "react";
import { useRouter } from "next/router";
function UserId() {
  const router = useRouter();
  const { userid } = router.query;
  console.log(userid);

  if (!userid) {
    return <h1>loading.....</h1>;
  }
  return (
    <div>
      <h1>
        user id {userid} va {}
      </h1>
    </div>
  );
}

export default UserId;
