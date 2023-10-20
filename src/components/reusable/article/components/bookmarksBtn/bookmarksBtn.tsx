import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../../../redux/store/store";
import { IconBtn } from "../../../iconBtn/iconBtn";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { changeUserData } from "../../../../../redux/reducers/usersReducer/usersReducer";
import { BookmarksBtnProps } from "../../types";
import { ThemeContextType } from "../../../../../contexts/themeContext/types";
import { AuthorizedContextType } from "../../../../../contexts/authorizedContext/types";
import { ThemeContext } from "../../../../../contexts/themeContext/themeContext";
import { AuthorizedContext } from "../../../../../contexts/authorizedContext/authorizedContext";
import { showToastMessage } from "../../../../../utils/alerts/alert";

import { Inner } from "./styledBookmarksBtn";

export const BookmarksBtn: React.FC<BookmarksBtnProps> = ({ dataCard }) => {
    const dispatch = useAppDispatch()
    const dataUserFromRedux = useAppSelector((state) => state.user.userData)
    const { articlename } = useParams()
    const [addedToBookmarks, setAddedToBookmarks] = useState<boolean>(false)
    const themeContext = useContext<ThemeContextType>(ThemeContext)
    const { isAuthorized } = useContext<AuthorizedContextType>(AuthorizedContext)

    const addArticleToBookmarks = () => {
        if (!isAuthorized) {
            showToastMessage({ type: 'warning', text: 'Sorry, you must be registered and logged in to add a bookmark' })
        } else {
            if (dataUserFromRedux) {
                if (addedToBookmarks) {
                    dispatch(changeUserData({
                        ...dataUserFromRedux,
                        bookmarks: dataUserFromRedux?.bookmarks.filter(bookmark => bookmark.uri !== articlename)
                    }))
                } else {
                    showToastMessage({ type: 'success', text: 'The article has been added to your bookmarks.' }) 
                    dispatch(changeUserData({
                        ...dataUserFromRedux,
                        bookmarks: [...(dataUserFromRedux?.bookmarks || []), dataCard]
                    }))
                }
            }
        }
    }

    useEffect(() => {
        dataUserFromRedux?.bookmarks &&
            dataUserFromRedux.bookmarks.some((bookmark) => bookmark.uri === articlename) ?
            setAddedToBookmarks(true) :
            setAddedToBookmarks(false)
    }, [dataUserFromRedux])

    return (
        <Inner>
            <IconBtn color={themeContext.themeStyles.color} onClickFunc={addArticleToBookmarks} icon={addedToBookmarks ? faBookmarkSolid : faBookmark} size={"lg"} />
        </Inner>
    )
}