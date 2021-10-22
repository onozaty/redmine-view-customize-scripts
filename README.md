# Code examples for "Redmine View Customize Plugin"

This is a project that publishes code examples of [View customize plugin for Redmine](https://github.com/onozaty/redmine-view-customize).  
Please refer to it when you write your code.

If the code you try does not work, you can ask a question via the project's [Issue](https://github.com/onozaty/redmine-view-customize-scripts/issues).  
**Please note that this is a place to ask questions, not a place to request coding.**

This project is maintained by [@onozaty](https://github.com/onozaty), the author of the View customize plugin.  
If this project serves you well, please support this project as a [sponsor](https://github.com/sponsors/onozaty).

## Examples 

### Issue input / チケット入力

* [Set the default value by tracker / トラッカーに応じてデフォルト値を設定](./examples/0003.set_default_value_by_tracker/example.md)  
* [Link custom fields (refining the children according to the parent value) / カスタムフィールドを連動させる(親の値に応じて、子を絞り込む)](./examples/0007.link_custom_fields/example.md)  
* [Change the visibility of custom fields by status / チケットのステータスに応じて、カスタムフィールドの表示/非表示を切り替える](./examples/0008.change_custom_field_visibility_by_status/example.md)
* [Display custom field checkboxes in two columns / カスタムフィールドのチェックボックスを2列で表示](./examples/0011.custom_field_checkbox_two_columns/example.md)
* [Display custom field checkboxes horizontally / カスタムフィールドのチェックボックスを横並びで表示](./examples/0012.custom_field_checkbox_horizontally/example.md)
* [Add an accesskey to the submit button of the issue / チケットの送信ボタンにアクセスキーを追加](./examples/0017.add_accesskey_on_issue_submit_button/example.md)
* [Add a search function to the selectbox / セレクトボックスに検索機能を追加](./examples/0018.add_search_function_to_selectbox/example.md)
* [Change done and assignee by status / ステータス毎に進捗率と担当者を変更](./examples/0019.change_done_and_assignee_by_status/example.md)
* [Automatically sets each item at the close of the issue / ステータスを終了にした時に、各項目を自動的に設定](./examples/0020.when_status_closed_set_items/example.md)
* [Force the assignee to change when the project is changed / プロジェクトを変更したら、担当者を強制的に変更](./examples/0026.force_assignee_change_when_project_changed/example.md)
* [Move custom field to after the tracker / カスタムフィールドをトラッカーの後に移動](./examples/0027.move_custom_field_to_after_tracker/example.md)
* [When the project is changed, the watcher is also changed / プロジェクトを変更した時に、ウオッチャーを変更](./examples/0028.when_project_changed_watcher_also_changed/example.md)
* [Hide file attachments in a specific project / 特定のプロジェクトでファイル添付を非表示に](./examples/0029.hide_attachments_form/example.md)
* [Displays the custom fields in three columns / カスタムフィールドを3列で表示](./examples/0030.change_3column_custom_fields/example.md)
* [When the parent custom field is selected, the child custom fields will be enabled / 親のカスタムフィールドが選択されたら、子のカスタムフィールドも入力可能に](./examples/0031.enable_child_when_parent_selected/example.md)

### Issue detail / チケット詳細

* [Move custom field to after description / カスタムフィールドを説明の後ろに移動](./examples/0014.move_custom_field_to_after_description/example.md)
* [Create a subtask using the REST API / REST APIを使って子チケットを作成](./examples/0021.create_subtasks_using_rest_api/example.md)
* [Create a related issues using the REST API / REST APIを使って関連チケットを作成](./examples/0022.create_related_issues_using_rest_api/example.md)
* [When creating a child issue, the information from the parent issue is used / 子チケット作成時に親チケットの情報を利用](./examples/0023.when_create_child_use_parent_infomation/example.md)

### Issues list / チケット一覧

* [Decorate the issue list / チケット一覧を装飾](./examples/0002.decorate_issue_list/example.md)  
* [Add a progress value to the issue list / チケット一覧に進捗の値を追加](./examples/0010.add_progress_value_to_issue_list/example.md)  
* [Change the version when the status is changed from the context menu of the issue list / チケット一覧のコンテキストメニューからステータスを変更した際に、バージョン番号も変更](./examples/0013.change_version_when_status_change_from_context_menu/example.md)
* [Change the font of the ticket list according to the value of the custom field / カスタムフィールドの値に応じて、チケットリストのフォントを変更](./examples/0016.change_font_of_issue_list_by_custom_field/example.md)

### Other / その他

* [Change the color of the header for each project / プロジェクト毎にヘッダの色を変える](./examples/0001.change_header_color_by_project/example.md)  
* [Toggle the display of the sidebar / サイドバーの表示・非表示を切り替え](./examples/0004.toggle_sidebar/example.md)  
* [Add a link to the list of all issues on the header / 全てのチケット一覧のリンクをヘッダに追加](./examples/0005.add_issues_link_on_header/example.md)  
* [Change the URL of the link to each project in the project list / プロジェクト一覧の各プロジェクトへのリンクのURLを変更](./examples/0006.change_project_link_url/example.md)  
* [Add a new issue tab (and "+" button available) / 新しいチケットタブを追加 ("+"ボタンと両立)](./examples/0009.add_new_issue_tab/example.md)  
* [Change the default branch on the Repository tab / リポジトリタブのデフォルトブランチを変更](./examples/0015.change_default_branch_on_repository_tab/example.md)  
* [Paste image from clipboard / クリップボードから画像を貼り付け可能に](./examples/0024.paste_image_from_clipboard/example.md)  
* [Inline autocomplete in textarea / テキストエリアで入力補完](./examples/0025.auto_complete_in_textarea/example.md)  

### Old

* [期日の3日前になったら警告を表示(バージョン1.2.0以上)](./old-examples/show_alert_on_due_date.js)
* [チェックされたらテキストボックスを無効化(バージョン1.2.0以上)](./old-examples/disable_text_depending_on_checked.js)
* [特定ユーザの削除、ロックボタンを非表示にする](./old-examples/hide_lock_button_and_delete_button.css)
* [特定ユーザに対して一部管理者メニューを非表示にする](./old-examples/hide_part_of_admin_menu.js)
* [特定の日以降は新規チケットのリンクを非表示に](./old-examples/hide_new_issue_link_after_date.js)
* [チケット一覧横のSummaryリンクを非表示に](./old-examples/hide_issue_summary_link.css)
* [親チケットが設定されたらカスタムフィールドを無効に](./old-examples/disable_if_parent_issue_is_set.js)
* [チケットタブでのデフォルトクエリ変更](./old-examples/change_issue_default_query.js)
* [チケット一覧を折りたたんだ状態で表示する](./old-examples/folded_issues.js)
