import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../../models/user';
import { AppState } from '../../../../app.state';
import { Store } from '@ngrx/store';
import { selectAllUsers, selectUsersList } from 'src/store/movies.selector';
import { loadAllUsers } from 'src/store/movies.action';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePopUpComponent } from '../../components/update-pop-up/update-pop-up.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog
  ) {
    this.ucitajKorisnike();
  }

  displayedColumns: string[] = ['id', 'username', 'email', 'role', 'action'];

  usersList: User[] = [];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.store.select(selectUsersList).subscribe((users) => {
      this.usersList = users;
      this.dataSource = new MatTableDataSource(this.usersList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ucitajKorisnike() {
    this.store.dispatch(loadAllUsers());
  }

  openPopUp(userId: string) {
    const popup = this.dialog.open(UpdatePopUpComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      data: {
        userId: userId,
      },
    });
    popup.afterClosed().subscribe((res) => {
      this.loadAllUsers();
      console.log(this.dataSource);
    });
  }

  opendialog() {}

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
