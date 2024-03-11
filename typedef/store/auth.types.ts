export type AuthTypes = {
  uid: string;
  id: string; // 유저 아이디
  displayName: string; // 닉네임
  profileImage: string | null; // 프로필 이미지
  status: 'Active' | 'Deactive'; // 계정 활성화 여부
  email: string; // 유저 이메일
  createdAt: Date;
};
