import { Component, OnInit } from '@angular/core';
import { MemberView } from '../../shared/models/admin/memberView.model';
import { AdminService } from '../services/admin.service';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  members: MemberView[] = [];
  memberToDelete: MemberView | undefined;
  isModalVisible: boolean = false;

  constructor(private adminService: AdminService,
              private sharedService: SharedService) {}

  ngOnInit(): void {
    this.adminService.getMembers().subscribe({
      next: members => this.members = members
    });
  }

  lockMember(id: string) {
    this.adminService.lockMember(id).subscribe({
      next: _ => {
        this.handleLockUnlockFilterAndMessage(id, true);
      }
    })
  }

  unlockMember(id: string) {
    this.adminService.unlockMember(id).subscribe({
      next: _ => {
        this.handleLockUnlockFilterAndMessage(id, false);
      }
    })
  }

  deleteMember(id: string) {
    let member = this.findMember(id);
    if (member) {
      this.memberToDelete = member;
      this.isModalVisible = true;
    }
  }

  confirm() {
    if (this.memberToDelete) {
      this.adminService.deleteMember(this.memberToDelete.id).subscribe({
        next: _ => {
          this.sharedService.showNotification(true, 'Deleted', `Member of ${this.memberToDelete?.userName} has been deleted!`);
          this.members = this.members.filter(x => x.id !== this.memberToDelete?.id);
          this.memberToDelete = undefined;
          this.isModalVisible = false;
        }
      })
    }
  }

  decline() {
    this.memberToDelete = undefined;
    this.isModalVisible = false;
  }

  private handleLockUnlockFilterAndMessage(id: string, locking: boolean) {
    let member = this.findMember(id);

    if (member) {
      member.isLocked = !member.isLocked;

      if (locking) { 
        this.sharedService.showNotification(true, 'Locked', `${member.userName} member has been locked`);
      } else {
        this.sharedService.showNotification(true, 'Unlocked', `${member.userName} member has been unlocked`);
      }
    }
  }

  private findMember(id: string): MemberView | undefined {
    let member = this.members.find(x => x.id === id);
    if (member) {
      return member;
    }

    return undefined;
  }
}
